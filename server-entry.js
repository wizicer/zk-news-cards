import { createSSRApp } from 'vue'
import { createRouter, createMemoryHistory } from 'vue-router'
import App from './src/App.vue'
import NewsView from './src/views/NewsView.vue'

export function createApp() {
    const app = createSSRApp(App)
    
    const router = createRouter({
        history: createMemoryHistory(),
        routes: [
            {
                path: '/',
                component: NewsView
            }
        ]
    })

    app.use(router)
    return { app, router }
}
