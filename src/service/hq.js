import puppeteer from 'puppeteer'

const url = 'https://hqonlinegratis.com.br/'

const puppeteerFunction = async () => {
    const browser = await puppeteer.launch({
        'args': [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ], headless: false
    })

    const page = await browser.newPage()

    await page.goto(url, { waitUntil: 'networkidle2' })
}

export { puppeteerFunction }