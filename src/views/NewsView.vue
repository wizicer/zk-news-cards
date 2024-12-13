<template>
  <div class="app-controls">
    <button @click="toggleView" class="view-toggle">
      {{ isTextView ? '切换到卡片视图' : '切换到文本视图' }}
    </button>
  </div>
  <div class="news-container" :class="{ 'text-view': isTextView }">
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
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { newsData } from '../data'
import QrcodeVue from 'qrcode.vue'

const route = useRoute()
const isTextView = ref(false)

const toggleView = () => {
  isTextView.value = !isTextView.value
}

const selectedDate = computed(() => route.query.date)

const displayedCards = computed(() => {
  if (selectedDate.value) {
    return newsData.filter(card => card.date === selectedDate.value)
  }
  // Default to latest news
  return [newsData[newsData.length - 1]]
})

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
</script>

<style>
@import '../style.css';
.app-controls {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.view-toggle {
  padding: 8px 16px;
  background: #1a1a1a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
  opacity: 0;
}

.view-toggle:hover {
  background: #333;
  opacity: 1;
}


.text-view .news-card {
  display: block;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
}

.text-view .card-header {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.text-view .projects {
  margin-top: 20px;
}

.text-view .project-item {
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  display: block;
}

.text-view .project-meta {
  display: none;
}

.text-view .project-content {
  margin: 0;
}

.text-view .project-name {
  margin: 0;
  font-size: 16px;
}

.text-view .project-url {
  font-size: 14px;
  color: #666;
}

.text-view .project-tags {
  margin: 5px 0;
}

.text-view .project-summary {
  margin: 5px 0;
  font-size: 14px;
}
</style>
