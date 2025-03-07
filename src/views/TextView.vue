<template>
  <pre>{{ textContent }}</pre>
</template>

<script setup>
import { computed, ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { newsData } from '../data'
import { generateTextContent } from '../utils/textGenerator'

const route = useRoute()
const selectedDate = computed(() => route.query.date)
const language = ref('zh')

onMounted(() => {
  language.value = route.query.lang || 'zh'
  console.log(`Text view language: ${language.value}`)
})

// Watch for route changes to update language
watch(
  () => route.query.lang,
  (newLang) => {
    if (newLang) {
      language.value = newLang
      console.log(`Language changed to: ${language.value}`)
    }
  }
)

const displayedCards = computed(() => {
  if (selectedDate.value) {
    return newsData.filter(card => card.date === selectedDate.value)
  }
  return [newsData[newsData.length - 1]]
})

const textContent = computed(() => generateTextContent(displayedCards.value, language.value))
</script>
