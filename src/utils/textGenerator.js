const iconMap = {
  '论文': '📄',
  '新闻': '📰',
  '开源': '💻',
  '视频': '🎥',
  '博客': '📝',
  '活动': '🎪',
  '工具': '🛠️',
  '应用': '📱',
  '信息': '📃',
  '漏洞': '🪳',
}

export const categoryNameMapEn = {
  '论文': 'Paper',
  '新闻': 'News',
  '开源': 'Open Source',
  '视频': 'Video',
  '博客': 'Blog',
  '活动': 'Event',
  '工具': 'Tool',
  '应用': 'App',
  '信息': 'News',
  '漏洞': 'Vulnerability',
}

export const getTypeIcon = (type) => {
  return iconMap[type] || '📌'
}

export const generateTextContent = (cards, language = 'zh') => {
  const translations = {
    zh: {
      heading: '🚀zkDaily 前沿热点追踪',
      viewWeb: '📄 网页查看：',
      collectedBy: '🪶 由 @icerdesign 收集'
    },
    en: {
      heading: '🚀zkDaily Frontier Tracker',
      viewWeb: '📄 View on web:',
      collectedBy: '🪶 Collected by @icerdesign'
    }
  }
  
  let text = ''
  cards.forEach(card => {
    // Skip if the card doesn't support this language
    if (language !== 'zh' && card.languages && !card.languages.includes(language)) {
      console.log(`Skipping card ${card.date} for language ${language}`)
      return
    }
    
    // Get language-specific weekday
    const weekday = card.weekday && typeof card.weekday === 'object' ? 
      card.weekday[language] || card.weekday.en || card.weekday.zh : 
      card.weekday
    
    // Use the correct translation for the heading
    text += `${translations[language].heading} ${card.date} ${weekday}\n\n`
    
    if (card.projects) {
      card.projects.forEach(project => {
        // Get project icon
        const icon = project.icon || getTypeIcon(project.type)
        text += `${icon} ${project.name}\n`
        text += `- ${project.url}\n`
        
        // Get language-specific summary
        let summary = ''
        if (project.summary) {
          if (typeof project.summary === 'object') {
            // Directly get the language-specific summary
            summary = project.summary[language]
            
            // Fallback if the specified language summary is not available
            if (!summary) {
              if (language === 'en' && project.summary.en) {
                summary = project.summary.en
              } else if (project.summary.zh) {
                summary = project.summary.zh
              }
            }
          } else {
            summary = project.summary
          }
        }
        
        text += `- ${summary.replace(/{{name}}/g, '')}\n\n`
      })
    }
    
    text += `---\n${translations[language].viewWeb} https://news.plonk.pro/${language}/${card.date.replace(/-/g, '/')}.html\n`
    text += `${translations[language].collectedBy}`
  })
  
  return text
}
