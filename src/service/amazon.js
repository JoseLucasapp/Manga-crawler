import puppeteer from 'puppeteer'

const url = 'https://www.amazon.com.br/gp/bestsellers/?ref_=nav_em_cs_bestsellers_0_1_1_2'

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