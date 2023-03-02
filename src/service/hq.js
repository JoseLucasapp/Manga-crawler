import puppeteer from 'puppeteer'

const url = 'https://hqonlinegratis.com.br'

const puppeteerFunction = async (query) => {
    const browser = await puppeteer.launch({
        'args': [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ], headless: false
    })

    const page = await browser.newPage()

    await page.goto(`${url}/page/1/`, { waitUntil: 'networkidle2' })

    await page.click('.nav-btn > label')
    await page.waitForSelector('input[name="s"]')
    await page.type('input[name="s"]', query.hq)
    await page.click('button[type="submit"]')

    /*const pageInfo = await page.evaluate(() => {
        const moreThanOnePage = document.getElementsByClassName('page-numbers').length > 0 ? true : false
        const pages = document.getElementsByClassName('page-numbers').length

        return { moreThanOnePage, pages }
    })*/

    await page.waitForSelector('.hqs')
    const hqs = await page.$$eval("div.hqs > div.container-hqs > div.hq", (divs) => divs.map((hq) => {
        const url = hq.querySelector('a').href
        const img = hq.querySelector('a > img').src
        const name = hq.querySelector('a > h2').innerText

        return { url, img, name }
    }))

    for (let i = 0; i < hqs.length; i++) {
        await page.goto(hqs[i].url)
        const pdf = await page.$$eval('.downloads', (as) => as.map((a) => a.querySelector('a').href))

        hqs[i]["pdf"] = pdf[0]
    }

    await browser.close()

    return hqs
}

export { puppeteerFunction }