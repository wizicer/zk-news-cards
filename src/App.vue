<template>
  <div class="news-container">
    <div v-for="(card, index) in displayedCards" :key="index" class="news-card">
      <div class="card-header">
        <div class="github-title">
          <div class="title-icon">
            <span class="github-icon">ZKP</span>
            零知识证明 <span class="highlight">新闻</span>
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
            <p class="project-summary">{{ project.summary }}</p>
          </div>
        </div>
      </div>
      <div class="card-footer">
        由
        <a href="https://x.com/icerdesign" target="_blank">@icerdesign</a>
        收集
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { newsData } from './data'
import QrcodeVue from 'qrcode.vue'

const cards = ref(newsData)

const iconMap = {
  '论文': '📄',
  '新闻': '📰',
  '开源': '💻',
  '视频': '🎥',
  '博客': '📝',
  '活动': '🎪',
  '工具': '🛠️'
}

const getTypeIcon = (type) => {
  return iconMap[type] || '📌'
}

const displayedCards = ref(newsData)
</script>

<style>
@import './style.css';
</style>
