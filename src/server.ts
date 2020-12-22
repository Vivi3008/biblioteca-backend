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
mongoose.connect(env.MONGO_URI, {
    useNewUrlParser: true,  
    useUnifiedTopology: true,
    useFindAndModify: false })

//funcoes com metodos http

//listar todos os livros
app.get('/list', async (req, res)=>{
  const books = await Book.find()
  res.json(books)
})

//cadastrar livro
app.post('/create', async (req,res)=>{
    const book = new Book(req.body)

    try {
      await book.save()
      res.send(book)
    } catch (error) {
      console.error('Erro ao cadastrar', error)
    }  
})

//atualizar dados
app.put('/update/:id', async(req,res)=> {
   const id = req.params.id
   const dataUpdate = req.body

   try {
    const update = await Book.findByIdAndUpdate(id, dataUpdate)
    if(update) res.send(dataUpdate)
   } catch (error) {
     res.send('Dado não atualizado')
     console.error(error)
   }
})

//deletar
app.delete('/delete/:id', async(req,res)=>{
  const book = await Book.findById(req.params.id)
  await book?.remove()
  return res.send('Livro deletado com sucesso!')
})
