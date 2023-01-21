import { getProducts } from '../controllers/amazon'

const routes = async (router) => {
    router.get('/', getProducts)
}

export { routes }