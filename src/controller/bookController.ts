import { Request, Response } from 'express'
import Book from '../model/bookModel'

export default {

    async listAll(req: Request, res: Response){
        
        try {
            const books = await Book.find()
            return res.json(books)
        } catch (error) {
            res.send('Erro interno no servidor!')
            console.error(error)
        }
    },

    async list(req: Request, res: Response){
        const { id } = req.params

        try {
            const books = await Book.findById(id)
            return res.send(books)
        } catch (error) {
            res.send('Erro interno no servidor!')
            console.error(error)
        }
    },

    async create(req: Request, res: Response){
        const book = new Book(req.body)

        try {
        await book.save()
        res.send(book)

        } catch (error) {
            res.send('Erro interno no servidor!')
            console.error(error)
        }  
    },

    async update(req: Request, res: Response){
        const id = req.params.id
        const dataUpdate = req.body
     
        try {
         const update = await Book.findByIdAndUpdate(id, dataUpdate, { new: true })
         if(update) res.send(dataUpdate)

        } catch (error) {
            res.send('Erro interno no servidor!')
          console.error(error)
        }
    },

    async delete(req: Request, res: Response){
        const book = await Book.findById(req.params.id)

        try {
            await book?.remove()
            return res.send('Livro deletado com sucesso!')
        } catch (error) {
            res.send('Erro interno no servidor!')
            console.error(error)
        }

    }
}