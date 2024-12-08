import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    ssr: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        server: resolve(__dirname, 'server-entry.js')
      }
    }
  }
})
