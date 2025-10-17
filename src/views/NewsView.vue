<template>
  <div class="app-controls">
    <button @click="copyToClipboard" class="copy-button">
      {{ language === 'zh' ? '复制文本内容' : 'Copy Text' }}
    </button>
    <button @click="toggleLanguage" class="lang-button">
      {{ language === 'zh' ? 'English' : '中文' }}
    </button>
  </div>
  <div class="news-container" :class="{ 'zh': language === 'zh', 'en': language === 'en' }" :style="{ '--primary-color': weekdayColor }">
    <div v-for="(card, index) in displayedCards" :key="index" class="news-card">
      <div class="card-header">
        <div class="github-title">
          <div class="title-icon">
            <span class="github-icon"></span>
            <span class="title-text">
              {{ language === 'zh' ? '零知识证明' : '' }}
            </span>
            <span class="highlight">zkDaily</span>
          </div>
          <div class="subtitle-text">
            {{ language === 'zh' ? '零知识证明 前沿热点追踪 🎯' : 'ZKP Frontier Tracker 🎯' }}
          </div>
        </div>
        <div class="date">
          <span class="date-weekday">{{ card.weekday[language] }}</span>
          <div class="date-details">
            <div class="date-number">{{ card.month }}.{{ card.day }}</div>
            <div class="date-year">{{ card.year }}</div>
          </div>
        </div>
      </div>
      <div class="card-subtitle">
      </div>
      <div class="projects">
        <div v-for="(project, pIndex) in card.projects" :key="pIndex">
          <div class="project-item">
            <div class="project-meta">
              <div class="project-icon">
                <img v-if="project.iconUrl" :src="project.iconUrl" :alt="project.name">
                <img v-else-if="project.iconUrls" :src="project.iconUrls[0]" :alt="project.name">
                <span v-else-if="project.icon">{{ project.icon }}</span>
                <span v-else>{{ getTypeIcon(project.type) }}</span>
              </div>
              <span class="project-type" v-if="project.type">{{ language === 'zh' ? project.type : categoryNameMapEn[project.type] }}</span>
              <div class="project-qr">
              <qrcode-vue
                :value="project.url"
                :size="64"
                level="L"
                render-as="svg"
                :margin="0"
                background="#ffffff"
                foreground="#000000"
              />
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-name" v-html="parseMathMarkdown(project.name)">
              </h3>
              <a :href="project.url" class="project-url">{{ project.url }}</a>
              <div class="project-tags">
                <span v-for="(tag, tIndex) in project.tags" :key="tIndex" class="tag">
                  {{ typeof tag === 'object' ? (tag[language] || tag.en || tag.zh) : tag }}
                </span>
              </div>
              <div class="project-summary" v-if="project.summary" v-html="parseMathMarkdown((typeof project.summary === 'object' ? project.summary[language] : project.summary).replaceAll('\{\{name\}\}', ''))">
              </div>
            </div>
          </div>
          <div class="project-notes" v-if="project.notes">
            <h4 class="notes-title">Notes</h4>
            <ul class="notes-list">
              <li v-for="(note, nIndex) in (typeof project.notes === 'object' && Array.isArray(project.notes[language]) ? project.notes[language] : 
                                          Array.isArray(project.notes) ? project.notes : [])" 
                  :key="nIndex" 
                  class="note-item" 
                  v-html="parseMathMarkdown(note)">
              </li>
            </ul>
          </div>
          <div class="project-images" v-if="project.images && project.images.length > 0">
            <h4 class="images-title">Notes</h4>
            <div class="images-container">
              <img v-for="(imageUrl, iIndex) in project.images" 
                   :key="iIndex" 
                   :src="imageUrl" 
                   :alt="`${project.name} image ${iIndex + 1}`" 
                   class="project-image" />
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        {{ language === 'zh' ? '由' : 'Collected by' }}
        <a href="https://x.com/icerdesign" target="_blank">@icerdesign</a>
        {{ language === 'zh' ? '收集' : '' }}
      </div>
      <div class="page-indicator" v-if="displayedCards.length > 1">
        <div v-for="i in displayedCards.length" :key="i" 
             :class="['indicator-dot', { active: i === index + 1 }]">
        </div>
      </div>
    </div>
    <div v-if="displayedInsights.length > 0" class="insights-section">
      <template v-for="(insight, index) in displayedInsights">
          <InsightCard 
            v-if="insight"
            :key="index" 
            :insight="insight"
            :date="date"
            :language="language"
          />
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { newsData } from '../data'
import QrcodeVue from 'qrcode.vue'
import InsightCard from '../components/InsightCard.vue';
import { generateTextContent, getTypeIcon, categoryNameMapEn } from '../utils/textGenerator'
import { parseMathMarkdown } from '../utils/mathMarkdownParser'

const route = useRoute()
const router = useRouter()

const language = ref(route.query.lang || 'zh')

function toggleLanguage() {
  language.value = language.value === 'zh' ? 'en' : 'zh'
  router.replace({ query: { ...route.query, lang: language.value } })
}

const selectedDate = computed(() => route.query.date)

const selectedItems = computed(() => {
  return selectedDate.value
    ? newsData.filter(card => card.date === selectedDate.value)
    : [newsData[newsData.length - 1]]
});
const date = computed(() => {
  return selectedItems.value[0]?.date || ''
});
const displayedCards = computed(() => {
  // Split projects into groups of 2
  return selectedItems.value.flatMap(card => {
    const projects = card.projects
    const cardGroups = []
    for (let i = 0; i < projects.length; i += 2) {
      cardGroups.push({
        ...card,
        projects: projects.slice(i, i + 2)
      })
    }
    return cardGroups
  })
})
const displayedInsights = computed(() => {
  return selectedItems.value.flatMap(card => 
    card.insights?.filter(insight => !insight.language || insight.language === language.value) || []
  )
})

const weekdayColor = computed(() => {
  const weekday = displayedCards.value[0]?.weekdayNumber || 0;
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  return `var(--color-${days[weekday]})`
})

async function copyToClipboard() {
  try {
    const text = generateTextContent(displayedCards.value, language.value, false, true)
    await navigator.clipboard.writeText(text)
    // alert(language.value === 'zh' ? '内容已复制到剪贴板' : 'Content copied to clipboard')
  } catch (err) {
    console.error(language.value === 'zh' ? '复制失败:' : 'Copy failed:', err)
    alert(language.value === 'zh' ? '复制失败，请重试' : 'Copy failed, please try again')
  }
}
</script>

<style>
@import '../style.css';
</style>
