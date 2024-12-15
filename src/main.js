import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import NewsView from './views/NewsView.vue'
import TextView from './views/TextView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: NewsView
    },
    {
      path: '/text',
      component: TextView
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
