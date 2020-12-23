import express from 'express'
import * as dotenv from 'dotenv'
import { load } from 'ts-dotenv'
import mongoose  from 'mongoose'
import cors from 'cors'
import routes from './routes'

dotenv.config()

//tipando variáveis ambiente
const env = load({
  MONGO_URI: String,
})

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)
app.listen(3300)

//conectando com o bd
mongoose.connect(env.MONGO_URI, {
    useNewUrlParser: true,  
    useUnifiedTopology: true,
    useFindAndModify: false })
