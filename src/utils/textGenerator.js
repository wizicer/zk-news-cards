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

export const getTypeIcon = (type) => {
  return iconMap[type] || '📌'
}

export const generateTextContent = (cards) => {
  let text = ''
  cards.forEach(card => {
    text += `🚀zkDaily 前沿热点追踪 ${card.year}-${card.month}-${card.day} ${card.weekday}\n\n`
    card.projects.forEach(project => {
      const icon = project.icon || getTypeIcon(project.type)
      text += `${icon} ${project.name}\n`
      text += `- ${project.url}\n`
      text += `- ${project.summary.replace(/{{name}}/g, '')}\n\n`
    })
    text += `---\n📄 网页查看： https://news.plonk.pro/${card.year}-${card.month}-${card.day}.html\n`
    text += `🪶 由 @icerdesign 收集`
  })
  return text
}
