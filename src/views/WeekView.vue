<template>
  <div class="week-view">
    <div class="language-selector">
      <button @click="toggleLanguage" class="lang-button">
        {{ language === 'zh' ? 'English' : '中文' }}
      </button>
    </div>
    <div v-for="week in weeklyData" :key="week.startDate" class="week-row">
      <div class="week-info">
        {{ week.startDate }} - {{ week.endDate }}
        <button @click="copyWeekContent(week)" class="copy-btn">{{ language === 'zh' ? '复制' : 'Copy' }}</button>
      </div>
    </div>
    <textarea v-model="generatedText" class="preview-text" readonly></textarea>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { newsData } from '../data'

/**
 * Calculate the week range where:
 * - Week starts on Thursday
 * - Week ends on Wednesday of the next week
 * This is useful for weekly news aggregation where we want to group articles
 * from Thursday to Wednesday of the following week
 */
function getWeekRange(date) {
  const curr = new Date(date)
  const day = curr.getDay() // 0 = Sunday, 4 = Thursday
  
  // Find nearest passed Thursday
  const diffToThursday = (day + 3) % 7
  const thursday = new Date(curr.setDate(curr.getDate() - diffToThursday))
  
  // Calculate the following Wednesday
  const wednesday = new Date(thursday)
  wednesday.setDate(thursday.getDate() + 6)
  
  return {
    start: thursday,
    end: wednesday
  }
}

function formatDate(date) {
  const d = new Date(date)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}

const route = useRoute()
const router = useRouter()
const language = ref(route.query.lang || 'zh')

function toggleLanguage() {
  language.value = language.value === 'zh' ? 'en' : 'zh'
  router.replace({ query: { ...route.query, lang: language.value } })
}

const weeklyData = computed(() => {
  const weeks = new Map()
  
  newsData.forEach(card => {
    const date = new Date(`${card.year}-${card.month}-${card.day}`)
    const weekRange = getWeekRange(date)
    const weekKey = weekRange.start.toISOString()
    
    if (!weeks.has(weekKey)) {
      weeks.set(weekKey, {
        startDate: formatDate(weekRange.start),
        endDate: formatDate(weekRange.end),
        cards: []
      })
    }
    weeks.get(weekKey).cards.push(card)
  })
  
  return Array.from(weeks.values()).sort((a, b) => 
    new Date(b.startDate) - new Date(a.startDate)
  )
})

function generateMarkdownContent(cards) {
  let content = ''
  
  // Use the week's end date from the first card's week range
  const firstCard = cards[0]
  const date = new Date(`${firstCard.year}-${firstCard.month}-${firstCard.day}`)
  const weekRange = getWeekRange(date)
  const endDate = weekRange.end
  content += `### ${endDate.getFullYear()}.${String(endDate.getMonth() + 1).padStart(2, '0')}.${String(endDate.getDate()).padStart(2, '0')}\n\n`
  
  const typeLabelMap = {
    zh: {
      '论文': '论文',
      '视频': '视频',
      '博客': '博客',
      '开源': '开源',
      '活动': '活动',
      '新闻': '信息',
      '信息': '信息',
      '工具': '工具'
    },
    en: {
      '论文': 'Papers',
      '视频': 'Videos',
      '博客': 'Blogs',
      '开源': 'Open Source',
      '活动': 'Events',
      '新闻': 'News',
      '信息': 'News',
      '工具': 'Tools'
    }
  }
  
  const groupedByType = {}
  cards.forEach(card => {
    card.projects.forEach(project => {
      const type = project.type === '新闻' ? '信息' : project.type
      if (!groupedByType[type]) {
        groupedByType[type] = []
      }
      
      const summary = typeof project.summary === 'object' ? 
        (project.summary[language.value] || project.summary.en || project.summary.zh) : 
        project.summary;
        
      groupedByType[type].push({
        ...project,
        summary: summary.replace(/{{name}}/g, `《${project.name}》`)
      })
    })
  })
  
  // Define the order of categories
  const categoryOrder = ['论文', '视频', '博客', '开源', '活动', '信息', '工具']
  
  // Generate content in the specified order
  categoryOrder.forEach(type => {
    if (groupedByType[type] && groupedByType[type].length > 0) {
      const typeLabel = typeLabelMap[language.value][type] || type
      content += `**【${typeLabel}】**\n\n`
      groupedByType[type].forEach(project => {
        content += `- ${project.summary}\n`
        if (project.url) {
          const urls = project.url.split(',').map(url => url.trim())
          const urlTexts = urls.map((url, index) => {
            if (url.includes('twitter.com') || url.includes('x.com')) {
              return `[𝕏](${url})`
            }
            if (urls.length > 1) {
              const linkText = language.value === 'zh' ? 
                (project.type === '视频' ? '视频' + (index + 1) : url.includes('blog') ? '博客' : '链接') : 
                (project.type === '视频' ? 'Video' + (index + 1) : url.includes('blog') ? 'Blog' : 'Link');
              return `[${linkText}](${url})`
            }
            const linkText = language.value === 'zh' ? 
              (project.type === '视频' ? '视频' : url.includes('blog') ? '博客' : '链接') : 
              (project.type === '视频' ? 'Video' : url.includes('blog') ? 'Blog' : 'Link');
            return `[${linkText}](${url})`
          })
          content += `  ${urlTexts.join('，\n  ')}\n`
        }
        content += '\n'
      })
    }
  })
  
  return content
}

const generatedText = ref('')

function copyWeekContent(week) {
  const content = generateMarkdownContent(week.cards)
  generatedText.value = content
  navigator.clipboard.writeText(content)
}
</script>

<style scoped>
.week-view {
  padding: 20px;
}

.language-selector {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.lang-button {
  padding: 5px 15px;
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.lang-button:hover {
  background-color: #0b7dda;
}

.week-row {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 4px;
}

.week-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copy-btn {
  padding: 5px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.copy-btn:hover {
  background-color: #45a049;
}

.preview-text {
  width: 100%;
  min-height: 300px;
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 4px;
  font-family: monospace;
  resize: vertical;
}
</style>
