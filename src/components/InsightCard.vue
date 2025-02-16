<template>
  <div class="insight-card">
    <div class="insight-header">
      <div class="insight-title-section">
        <div class="insight-main-title">每日ZKP见解</div>
      </div>
      <div class="insight-subtitle-section">
        <div class="insight-slogan">{{ insight.slogan }}</div>
      </div>
      <div class="insight-corner">{{ date }}</div>
    </div>
    <div class="insight-content">
      <div class="insight-title">{{ insight.title }}</div>
      <div class="insight-frame">
        <div class="image-container">
          <img v-for="(imageUrl, index) in imageUrls" :key="index" :src="imageUrl"
            :alt="`${insight.title} - ${index + 1}`" class="insight-image" />
        </div>
      </div>
      <div v-if="insight.url" class="insight-url-wrapper">
        <div class="insight-url">
          <a :href="insight.url" target="_blank">{{ insight.url }}</a>
        </div>
      </div>
      <div v-if="insight.quotes && insight.quotes.length > 0" class="insight-quote">
        {{ insight.quotes[0] }}
      </div>
      <div v-if="insight.url" class="project-qr">
        <qrcode-vue
          :value="insight.url"
          :size="64"
          level="L"
          render-as="svg"
          :margin="0"
          background="#ffffff"
          foreground="#000000"
          :image-settings="{excavate: false}"
        />
      </div>
    </div>
    <div class="insight-footer">
      <span class="insight-copyright">
        由
        <a href="https://x.com/icerdesign" target="_blank">@icerdesign</a>
        <span v-if="insight.type == 'reprint'">
          收集
        </span>
        <span v-else>
          创作
        </span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import QrcodeVue from 'qrcode.vue'

const props = defineProps({
  insight: {
    type: Object,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})

const imageUrls = ref([])

watchEffect(async () => {
  if (!props.insight.images?.length) {
    imageUrls.value = []
    return
  }

  const loadedImages = await Promise.all(
    props.insight.images.map(async (imageImport) => {
      const imageModule = await imageImport
      return imageModule.default
    })
  )
  imageUrls.value = loadedImages
})
</script>

<style>
</style>