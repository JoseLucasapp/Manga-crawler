import dotenv from 'dotenv'
dotenv.config()

import express from "express";
import cors from 'cors'
import { routes } from './routes/amazon'

const app = express()
const router = express.Router()

app.use(express.json())
app.use(cors())
app.use(router)

routes(router)

app.listen(3000)