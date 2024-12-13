import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import NewsView from './views/NewsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: NewsView
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
