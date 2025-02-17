<template>
  <div class="week-view">
    <div v-for="week in weeklyData" :key="week.startDate" class="week-row">
      <div class="week-info">
        {{ week.startDate }} - {{ week.endDate }}
        <button @click="copyWeekContent(week)" class="copy-btn">Copy</button>
      </div>
    </div>
    <textarea v-model="generatedText" class="preview-text" readonly></textarea>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
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
  
  const groupedByType = {}
  cards.forEach(card => {
    card.projects.forEach(project => {
      const type = project.type === '新闻' ? '信息' : project.type
      if (!groupedByType[type]) {
        groupedByType[type] = []
      }
      groupedByType[type].push({
        ...project,
        summary: project.summary.replace(/{{name}}/g, `《${project.name}》`)
      })
    })
  })
  
  // Define the order of categories
  const categoryOrder = ['论文', '视频', '博客', '开源', '活动', '信息', '工具']
  
  // Generate content in the specified order
  categoryOrder.forEach(type => {
    if (groupedByType[type] && groupedByType[type].length > 0) {
      content += `**【${type}】**\n\n`
      groupedByType[type].forEach(project => {
        content += `- ${project.summary}\n`
        if (project.url) {
          const urls = project.url.split(',').map(url => url.trim())
          const urlTexts = urls.map((url, index) => {
            if (url.includes('twitter.com') || url.includes('x.com')) {
              return `[𝕏](${url})`
            }
            if (urls.length > 1) {
              return `[${project.type === '视频' ? '视频' + (index + 1) : url.includes('blog') ? '博客' : '链接'}](${url})`
            }
            return `[${project.type === '视频' ? '视频' : url.includes('blog') ? '博客' : '链接'}](${url})`
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
