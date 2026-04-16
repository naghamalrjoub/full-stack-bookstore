const bookModel = require("../models/bookSchema")

const addBook = async (req, res) => {
    const information = req.body
    const book = new bookModel();
    try {
        Object.keys(information).forEach(key=>{
            book[key] = information[key]
        })

        const saved = await book.save();
        res.json(saved);
    }

    catch(err) {
        res.status(500).json(err)
    }
}

const getAllBooks = (req, res) => {
    bookModel.find({}).then((result)=>{
        res.status(201).json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })
}

const getBook = (req, res) => {
    const {id} = req.params
    bookModel.findById(id).then((result)=>{
        res.status(201).json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })
}

const updateData = async (req, res) => {
    const {id} = req.params;
    const updates = req.body;
    try {
        const book = await bookModel.findById(id);
        if (!book) {
            res.status(404).json("not found")
        }

        else {
            Object.keys(updates).forEach(key=>{
                book[key] = updates[key]
            })

            const updatedBook = await book.save();
            res.json(updatedBook)
        }
    }
    catch(err){
        res.status(500).json(err)
    }
}

const deleteBook = (req, res) => {
    const {id} = req.params
    bookModel.findByIdAndDelete(id).then((result)=>{
        res.status(201).json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })
}

module.exports = {addBook, getAllBooks, updateData, getBook, deleteBook}