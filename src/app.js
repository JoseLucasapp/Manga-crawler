import dotenv from 'dotenv'
dotenv.config()

import express from "express";
import cors from 'cors'

const app = express()
const routes = express.Router()

app.use(express.json())
app.use(cors())

app.listen(3000)