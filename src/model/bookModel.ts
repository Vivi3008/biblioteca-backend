import mongoose from 'mongoose'

const { Schema } = mongoose

const Books = new Schema({
    titulo: String,
    editora: String,
    foto: String,
    autores: [String]
})

export default mongoose.model("Book", Books)