<template>
  <div class="app-controls">
    <button @click="copyToClipboard" class="copy-button">
      复制文本内容
    </button>
  </div>
  <div class="news-container" :style="{ '--primary-color': weekdayColor }">
    <div v-for="(card, index) in displayedCards" :key="index" class="news-card">
      <div class="card-header">
        <div class="github-title">
          <div class="title-icon">
            <span class="github-icon"></span>
            零知识证明 <span class="highlight">zkDaily</span>
          </div>
          <div class="subtitle-text">
            零知识证明 前沿热点追踪 🎯
          </div>
        </div>
        <div class="date">
          <span class="date-weekday">{{ card.weekday }}</span>
          <div class="date-details">
            <div class="date-number">{{ card.month }}.{{ card.day }}</div>
            <div class="date-year">{{ card.year }}</div>
          </div>
        </div>
      </div>
      <div class="card-subtitle">
      </div>
      <div class="projects">
        <div v-for="(project, pIndex) in card.projects" :key="pIndex" class="project-item">
          <div class="project-meta">
            <div class="project-icon">
              <img v-if="project.iconUrl" :src="project.iconUrl" :alt="project.name">
              <img v-else-if="project.iconUrls" :src="project.iconUrls[0]" :alt="project.name">
              <span v-else-if="project.icon">{{ project.icon }}</span>
              <span v-else>{{ getTypeIcon(project.type) }}</span>
            </div>
            <span class="project-type" v-if="project.type">{{ project.type }}</span>
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
            <h3 class="project-name">
              {{ project.name }}
            </h3>
            <a :href="project.url" class="project-url">{{ project.url }}</a>
            <div class="project-tags">
              <span v-for="(tag, tIndex) in project.tags" :key="tIndex" class="tag">
                {{ tag }}
              </span>
            </div>
            <p class="project-summary" v-if="project.summary">{{ project.summary.replaceAll('\{\{name\}\}','') }}</p>
          </div>
        </div>
      </div>
      <div class="card-footer">
        由
        <a href="https://x.com/icerdesign" target="_blank">@icerdesign</a>
        收集
      </div>
      <div class="page-indicator" v-if="displayedCards.length > 1">
        <div v-for="i in displayedCards.length" :key="i" 
             :class="['indicator-dot', { active: i === index + 1 }]">
        </div>
      </div>
    </div>
      <div v-if="displayedInsights.length > 0" class="insights-section">
        <InsightCard 
          v-for="(insight, index) in displayedInsights" 
          :key="index" 
          :insight="insight"
          :date="date"
        />
      </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { newsData } from '../data'
import QrcodeVue from 'qrcode.vue'
import InsightCard from '../components/InsightCard.vue';
import { generateTextContent, getTypeIcon } from '../utils/textGenerator'

const route = useRoute()

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
  return selectedItems.value.flatMap(card => card.insights)
})

const weekdayColor = computed(() => {
  const weekday = displayedCards.value[0]?.weekdayNumber || 0;
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  return `var(--color-${days[weekday]})`
})

async function copyToClipboard() {
  try {
    const text = generateTextContent(displayedCards.value)
    await navigator.clipboard.writeText(text)
    // alert('内容已复制到剪贴板')
  } catch (err) {
    console.error('复制失败:', err)
    alert('复制失败，请重试')
  }
}
</script>

<style>
@import '../style.css';
</style>
