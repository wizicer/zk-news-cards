import { Command } from 'commander';
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import axios from 'axios';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';

// Load environment variables from .env file
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const program = new Command();

// WeChat Work webhook URL - this should be configured via environment variable
const WECOM_WEBHOOK_URL = process.env.WECOM_WEBHOOK_URL;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN);

async function takeScreenshot() {
    // Create screenshots directory if it doesn't exist
    const screenshotDir = './screenshots';
    if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir);
    }

    // Generate filename with current date
    const today = new Date();
    const filename = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    const htmlPath = path.join('./docs', `${filename}.html`);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Set high DPI viewport (2x scale)
    await page.setViewport({
        width: 480,
        height: 640,
        deviceScaleFactor: 2
    });
    
    // Load the local HTML file
    await page.goto(`file://${path.resolve(htmlPath)}`, { waitUntil: 'networkidle0' });
    
    // Small delay to ensure all content is rendered
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Get all news cards
    const cards = await page.$$('.news-card');
    const filepaths = [];
    
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const filepath = path.join(screenshotDir, `${filename}-${i + 1}.png`);
        
        // Screenshot individual card
        await card.screenshot({
            path: filepath,
        });
        
        filepaths.push(filepath);
        console.log(`Card ${i + 1} screenshot saved to: ${filepath}`);
    }

    await browser.close();
    return filepaths;
}

async function generatePDF() {
    // Create pdfs directory if it doesn't exist
    const pdfDir = './pdfs';
    if (!fs.existsSync(pdfDir)) {
        fs.mkdirSync(pdfDir);
    }

    // Generate filename with current date
    const today = new Date();
    const filename = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    const htmlPath = path.join('./docs', `${filename}.html`);
    const filepath = path.join(pdfDir, `${filename}.pdf`);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Set viewport similar to screenshot
    await page.setViewport({
        width: 480,
        height: 640,
        deviceScaleFactor: 2
    });
    
    // Load the local HTML file
    await page.goto(`file://${path.resolve(htmlPath)}`, { waitUntil: 'networkidle0' });
    
    // Small delay to ensure all content is rendered
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    await page.pdf({
        path: filepath,
        width: '480px',
        height: '640px',
        printBackground: true,
        margin: {
            top: '20px',
            right: '20px',
            bottom: '20px',
            left: '20px'
        }
    });
    await browser.close();
    
    console.log(`PDF saved to: ${filepath}`);
    return filepath;
}

async function sendWecomNotification(imagePath, textPath) {
    if (!WECOM_WEBHOOK_URL) {
        throw new Error('WECOM_WEBHOOK_URL environment variable is not set');
    }

    // Send image first
    const imageBuffer = fs.readFileSync(imagePath);
    const md5Hash = crypto.createHash('md5').update(imageBuffer).digest('hex');
    const base64Image = imageBuffer.toString('base64');
    
    const imagePayload = {
        msgtype: 'image',
        image: {
            base64: base64Image,
            md5: md5Hash
        }
    };

    try {
        await axios.post(WECOM_WEBHOOK_URL, imagePayload);
        console.log('Image sent successfully to Wecom');

        // Then send text content
        if (textPath && fs.existsSync(textPath)) {
            const textContent = fs.readFileSync(textPath, 'utf-8');
            const textPayload = {
                msgtype: 'markdown',
                markdown: {
                    content: textContent
                }
            };
            await axios.post(WECOM_WEBHOOK_URL, textPayload);
            console.log('Text content sent successfully to Wecom');
        }
    } catch (error) {
        console.error('Failed to send notification:', error.response?.data || error.message);
        throw error;
    }
}

async function sendTelegramNotification(imagePath, textPath) {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        console.error('Telegram configuration missing. Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env file');
        return;
    }

    try {
        await bot.sendPhoto(TELEGRAM_CHAT_ID, fs.createReadStream(imagePath));
        console.log('Image sent to Telegram successfully');

        if (textPath && fs.existsSync(textPath)) {
            const textContent = fs.readFileSync(textPath, 'utf-8');
            await bot.sendMessage(TELEGRAM_CHAT_ID, textContent);
            console.log('Text content sent to Telegram successfully');
        }
    } catch (error) {
        console.error('Error sending to Telegram:', error.message);
    }
}

program
    .name('zkpnewscards-cli')
    .description('CLI for ZKP News Cards operations')
    .version('1.0.0');

program
    .command('screenshot')
    .description('Take a screenshot of the news card')
    .action(async () => {
        try {
            await takeScreenshot();
        } catch (error) {
            console.error('Failed to take screenshot:', error);
            process.exit(1);
        }
    });

program
    .command('pdf')
    .description('Generate a PDF of the news card')
    .action(async () => {
        try {
            await generatePDF();
        } catch (error) {
            console.error('Failed to generate PDF:', error);
            process.exit(1);
        }
    });

program
    .command('notify')
    .description('Take a screenshot and send notifications')
    .action(async () => {
        try {
            const today = new Date();
            const filename = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
            const imagePaths = await takeScreenshot();
            const textPath = path.join('./texts', `${filename}.txt`);

            if (WECOM_WEBHOOK_URL) {
                for (const imagePath of imagePaths) {
                    await sendWecomNotification(imagePath, textPath);
                }
            }
            if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
                for (const imagePath of imagePaths) {
                    await sendTelegramNotification(imagePath, textPath);
                }
            }
        } catch (error) {
            console.error('Error in notify command:', error);
            process.exit(1);
        }
    });

program.parse();
