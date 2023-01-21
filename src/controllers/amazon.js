import { puppeteerFunction } from '../service/amazon'

const getProducts = async (req, res) => {
    try {
        const data = await puppeteerFunction()
        res.status(200).json("data")
    } catch (error) {
        res.status(500).json(error)
    }
}

export { getProducts }