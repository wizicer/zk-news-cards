import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { renderToString } from '@vue/server-renderer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function generateStaticHTML() {
    const { createApp } = await import('./dist/server/server-entry.js')
    const { app, router } = createApp()

    // Generate HTML for root path
    await router.push('/')
    await router.isReady()
    const appContent = await renderToString(app)
    
    // Generate date-based filename
    const today = new Date()
    const filename = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
    
    const template = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZKP Trending News</title>
    <style>
        ${fs.readFileSync(path.join(__dirname, 'src/style.css'), 'utf-8')}
    </style>
</head>
<body>
    <div id="app">${appContent}</div>
</body>
</html>`

    // Ensure html directory exists
    const htmlDir = path.join(__dirname, 'docs')
    if (!fs.existsSync(htmlDir)) {
        fs.mkdirSync(htmlDir, { recursive: true })
    }
    
    const outputPath = path.join(htmlDir, `${filename}.html`)
    fs.writeFileSync(outputPath, template)
    console.log(`Static HTML generated successfully at: ${outputPath}`)

    // Generate text content
    await router.push('/text')
    await router.isReady()
    const textContent = await renderToString(app)

    // Ensure texts directory exists
    const textsDir = path.join(__dirname, 'texts')
    if (!fs.existsSync(textsDir)) {
        fs.mkdirSync(textsDir, { recursive: true })
    }

    const textOutputPath = path.join(textsDir, `${filename}.txt`)
    fs.writeFileSync(textOutputPath, textContent.replace(/<[^>]*>/g, '').trim())
    console.log(`Text content generated successfully at: ${textOutputPath}`)
}

generateStaticHTML().catch(console.error)
