import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { renderToString } from '@vue/server-renderer'
import he from 'he'

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
    const year = String(today.getFullYear()).slice(-2)
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')

    // Ensure directories exist
    const htmlDir = path.join(__dirname, 'docs', year, month)
    const textsDir = path.join(__dirname, 'texts', year, month)
    
    ;[htmlDir, textsDir].forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true })
        }
    })

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

    const outputPath = path.join(htmlDir, `${day}.html`)
    fs.writeFileSync(outputPath, template)
    console.log(`Static HTML generated successfully at: ${outputPath}`)

    // Generate text content
    await router.push('/text')
    await router.isReady()
    const textContent = await renderToString(app)

    const textOutputPath = path.join(textsDir, `${day}.txt`)
    const textWithoutTags = textContent.replace(/<[^>]*>/g, '').trim();
    const textOutput = he.decode(textWithoutTags);
    fs.writeFileSync(textOutputPath, textOutput)
    console.log(`Text content generated successfully at: ${textOutputPath}`)
}

generateStaticHTML().catch(console.error)
