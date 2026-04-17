const bookModel = require("../models/bookSchema")

const addBook = async (req, res) => {
    const information = req.body
    const book = new bookModel();
    try {
        Object.keys(information).forEach(key=>{
            book[key] = information[key]
        })

        const saved = await book.save();
        res.status(201).json(saved);
    }

    catch(err) {
        res.status(500).json(err)
    }
}

const getAllBooks = (req, res) => {
    bookModel.find({}).populate("author").then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })
}

const getBook = (req, res) => {
    const {id} = req.params
    bookModel.findById(id).populate("author").then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })
}

const updateData = (req, res) => {
    const {id} = req.params;
    bookModel.findByIdAndUpdate(id, req.body, {
        new: true, runValidators: true
    }).then((result)=>{
        res.status(204).json(result)
    }).catch(err=>{
        res.status(500).json(err)
    })
}

const deleteBook = (req, res) => {
    const {id} = req.params
    bookModel.findByIdAndDelete(id).then((result)=>{
        res.status(204).json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })
}

module.exports = {addBook, getAllBooks, updateData, getBook, deleteBook}