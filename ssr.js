import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { renderToString } from '@vue/server-renderer'
import he from 'he'
import { newsData } from './src/data.js'
import { generateTextContent } from './src/utils/textGenerator.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function generateStaticHTML(language = 'zh') {
    // Check if content exists for this language
    const today = new Date()
    const year = String(today.getFullYear())
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    
    // Find the entry for today
    const todayData = newsData.find(entry => entry.date === `${year}-${month}-${day}`)
    
    // Skip generation if the languages array doesn't include the current language
    if (todayData && todayData.languages && !todayData.languages.includes(language)) {
        console.log(`Skipping generation for ${language} as it's not listed in languages array for today`)
        return
    }

    const { createApp } = await import('./dist/server/server-entry.js')
    const { app, router } = createApp()

    // Generate HTML for root path with language parameter
    await router.push(`/?lang=${language}`)
    await router.isReady()
    let appContent = await renderToString(app)
    appContent = appContent.replace(/"\.\/images\/.*"/g, m => `"../../.${m.slice(1)}"`)

    // Ensure directories exist - use language-specific subdirectories
    const htmlDir = path.join(__dirname, 'docs', language, year, month)
    const textsDir = path.join(__dirname, 'texts', language, year, month)
    
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
    <style>
        ${fs.readFileSync(path.join(__dirname, 'node_modules/katex/dist/katex.min.css'), 'utf-8')}
    </style>
</head>
<body>
    <div id="app">${appContent}</div>
    <script>
        // Set initial language
        window.initialLanguage = "${language}";
    </script>
</body>
</html>`

    const outputPath = path.join(htmlDir, `${day}.html`)
    fs.writeFileSync(outputPath, template)
    console.log(`Static HTML (${language}) generated successfully at: ${outputPath}`)

    // Generate text content
    const matchingEntry = newsData.find(entry => {
        const date = new Date(entry.date)
        return date.getFullYear() === parseInt(year) && 
               (date.getMonth() + 1) === parseInt(month) && 
               date.getDate() === parseInt(day)
    })
    
    let textOutput
    if (matchingEntry) {
        // Generate using the text generator directly
        console.log(`Generating ${language} text content directly for ${year}-${month}-${day}`)
        textOutput = generateTextContent([matchingEntry], language, false, true)
    } else {
        // Fallback to rendered content
        await router.push(`/text?lang=${language}`)
        await router.isReady()
        const textContent = await renderToString(app)
        const textWithoutTags = textContent.replace(/<[^>]*>/g, '').trim()
        textOutput = he.decode(textWithoutTags)
    }

    const textOutputPath = path.join(textsDir, `${day}.txt`)
    fs.writeFileSync(textOutputPath, textOutput)
    console.log(`Text content (${language}) generated successfully at: ${textOutputPath}`)
}

// Process command line arguments
const args = process.argv.slice(2);
const languages = args.includes('--all-languages') ? ['zh', 'en'] : 
               (args.includes('--language') ? [args[args.indexOf('--language') + 1]] : ['zh']);

// Generate for all specified languages
Promise.all(languages.map(lang => generateStaticHTML(lang)))
    .then(() => console.log('All static HTML and text files generated successfully'))
    .catch(console.error);
