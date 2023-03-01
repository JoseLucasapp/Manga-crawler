import { getProducts } from '../controllers/hq'

const routes = async (router) => {
    router.get('/', getProducts)
}

export { routes }