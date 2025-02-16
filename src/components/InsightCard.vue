<template>
  <div class="insight-card">
    <div class="card-header">
      <div class="title-section">
        <div class="main-title">每日ZKP见解</div>
      </div>
      <div class="subtitle-section">
        <div class="slogan">{{ insight.slogan }}</div>
      </div>
      <div class="corner">{{ date }}</div>
    </div>
    <div class="content-section">
      <div class="insight-title">{{ insight.title }}</div>
      <div class="frame">
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
      <div v-if="insight.quotes && insight.quotes.length > 0" class="quote">
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
    <div class="card-footer">
      <span class="copyright">
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

<style scoped>
.insight-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: white;
  position: relative;
  width: 461px;
  min-height: 626px;
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 1.5rem 0;
  background: var(--primary-color);
  color: white;
  position: relative;
  margin-bottom: 0;
  height: 80px;
  flex-shrink: 0;
}

.corner {
  position: absolute;
  top: 0;
  right: 0;
  min-width: 20px;
  height: 20px;
  padding: 0 10px 5px;
  background: var(--primary-dark);
  border-radius: 8px 0 0 8px;
}

.title-section {
  flex: 1;
  z-index: 1;
}

.subtitle-section {
  position: absolute;
  right: 1.5rem;
  bottom: 0;
  text-align: right;
  z-index: 1;
}

.main-title {
  position: absolute;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  bottom: 0;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
}

.slogan {
  font-size: 1rem;
  opacity: 0.9;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid white;
}

.content-section {
  position: relative;
  padding: 1rem;
  margin-bottom: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 12px solid var(--primary-color);
}

.content-section::after {
  content: '';
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  left: 2px;
  border: 4px solid var(--primary-color);
  pointer-events: none;
  border-radius: 8px;

}

.content-section::before {
  content: '';
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  border: 2px solid var(--primary-color);
  pointer-events: none;
  border-radius: 8px;
}

.insight-title {
  font-size: 1rem;
  font-weight: bold;
  padding: 4px 0;
  margin-bottom: 1rem;
  background: var(--primary-light);
  color: var(--text-primary);
  border-radius: 8px;
  text-align: center;
}

.frame {
  position: relative;
  margin: 0;
  z-index: 1;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  flex-wrap: wrap;
}

.insight-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.insight-url-wrapper {
  width: 100%;
  position: relative;
  margin-top: 1rem
}

.insight-url {
  position: absolute;
  right: 0;
  bottom: -4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 400px;
}

.insight-url a {
  color: var(--link-color);
  text-decoration: none;
  font-size: 0.7rem;
}

.project-qr {
  position: absolute;
  left: 10px;
  bottom: -34px;
  z-index: 1;
  opacity: 1;
}

.quote {
  font-style: italic;
  font-size: 0.9rem;
  color: #666;
  background: #f5f5f5;
  padding: 5px 10px;
  margin-top: 1rem;
  border-radius: 4px;
}

.card-footer {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 0.5rem 1rem;
  background: #f5f5f5;
  font-size: 0.9rem;
  color: #666;
  background-color: var(--primary-color);
  width: 100%;
  min-height: 16px;
}

.card-footer a {
  color: var(--primary-light);
  text-decoration: none;
}

.card-footer a:hover {
  text-decoration: underline;
}

.copyright {
  float: right;
  padding-right: 30px;
}
</style>