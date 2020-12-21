import express from 'express'
import * as dotenv from 'dotenv'
import { load } from 'ts-dotenv'
import Book from './bookSchema'
import mongoose  from 'mongoose'

dotenv.config()

//tipando variáveis ambiente
const env = load({
  MONGO_URI: String,
})

const app = express()

//permitindo uso de json 
app.use(express.json())

app.listen(3300)

//conectando com o bd
mongoose.connect(env.MONGO_URI, {useNewUrlParser: true,  useUnifiedTopology: true})

//funcoes com metodos http
app.get('/list', async (req, res)=>{
  const books = await Book.find()
  res.json(books)
})

app.post('/create', async (req,res)=>{
    const book = new Book(req.body)

    try {
      await book.save()
      res.send("Cadastrado com sucesso!")
    } catch (error) {
      console.error('Erro ao cadastrar', error)
    }  
})

app.delete('/delete/:id', async(req,res)=>{
   const book = await Book.findById(req.params.id)
   await book?.remove()
   return res.send('Livro deletado com sucesso!')
})




