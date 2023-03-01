import { puppeteerFunction } from '../service/hq'

const getProducts = async (req, res) => {
    try {
        const query = req.query
        const data = await puppeteerFunction(query)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

export { getProducts }