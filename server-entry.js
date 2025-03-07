import { createSSRApp } from 'vue'
import { createRouter, createMemoryHistory } from 'vue-router'
import App from './src/App.vue'
import NewsView from './src/views/NewsView.vue'
import TextView from './src/views/TextView.vue'
import WeekView from './src/views/WeekView.vue'

export function createApp() {
    const app = createSSRApp(App)
    
    const router = createRouter({
        history: createMemoryHistory(),
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

    // Add global property for language in SSR context
    app.config.globalProperties.$language = 'zh'

    // Add route guard to extract and set language
    router.beforeEach((to, from, next) => {
        const lang = to.query.lang || 'zh'
        app.config.globalProperties.$language = lang
        next()
    })

    app.use(router)
    return { app, router }
}
