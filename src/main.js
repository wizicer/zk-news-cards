import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import NewsView from './views/NewsView.vue'
import TextView from './views/TextView.vue'
import WeekView from './views/WeekView.vue'

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
    },
    {
      path: '/week',
      component: WeekView
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
