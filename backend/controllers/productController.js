const bookModel = require("../models/bookSchema")

const addBook = (req, res) => {
    const {title, author, price} = req.body
    const book = new bookModel({
        title, author, price
    })
    book.save().then((result)=>{
        res.status(201).json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })
}

const getAllBooks = (req, res) => {
    
}

module.exports = {addBook}