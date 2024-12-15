<template>
  <pre>{{ textContent }}</pre>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { newsData } from '../data'
import { generateTextContent } from '../utils/textGenerator'

const route = useRoute()
const selectedDate = computed(() => route.query.date)

const displayedCards = computed(() => {
  if (selectedDate.value) {
    return newsData.filter(card => card.date === selectedDate.value)
  }
  return [newsData[newsData.length - 1]]
})

const textContent = computed(() => generateTextContent(displayedCards.value))
</script>
