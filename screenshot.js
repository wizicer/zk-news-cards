import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

async function takeScreenshot() {
    // Create screenshots directory if it doesn't exist
    const screenshotDir = './screenshots';
    if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir);
    }

    // Generate filename with current date
    const today = new Date();
    const filename = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}.png`;
    const filepath = path.join(screenshotDir, filename);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Set high DPI viewport (2x scale)
    await page.setViewport({
        width: 480,
        height: 640,
        deviceScaleFactor: 2
    });
    
    // Wait for dev server to be ready
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    
    // Wait for any Vue hydration to complete
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    await page.screenshot({
        path: filepath,
        fullPage: true,
    });
    await browser.close();
    
    console.log(`High DPI Screenshot saved to: ${filepath}`);
}

takeScreenshot()
    .then(() => console.log('Screenshot taken successfully!'))
    .catch(console.error);
