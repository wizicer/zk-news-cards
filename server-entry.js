import { createSSRApp } from 'vue'
import { createRouter, createMemoryHistory } from 'vue-router'
import App from './src/App.vue'
import NewsView from './src/views/NewsView.vue'
import TextView from './src/views/TextView.vue'

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
            }
        ]
    })

    app.use(router)
    return { app, router }
}
