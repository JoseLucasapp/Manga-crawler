import puppeteer from 'puppeteer'

const url = 'https://hqonlinegratis.com.br/'

const puppeteerFunction = async (query) => {
    const browser = await puppeteer.launch({
        'args': [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ], headless: false
    })

    const page = await browser.newPage()

    await page.goto(url, { waitUntil: 'networkidle2' })

    await page.click('.nav-btn > label')
    await page.waitForSelector('input[name="s"]')
    await page.type('input[name="s"]', query.hq)
    await page.click('button[type="submit"]')

    await page.waitForSelector('.hqs')
    const hqs = await page.$$eval("div.hqs > div.container-hqs > div.hq", (divs) => divs.map((hq) => {
        const url = hq.querySelector('a').href
        const img = hq.querySelector('a > img').src
        const name = hq.querySelector('a > h2').innerText

        return { url, img, name }
    }))

    await browser.close()

    return hqs
}

export { puppeteerFunction }