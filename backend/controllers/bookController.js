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
    const limit = parseInt(req.query.limit) || 0;
    const {category} = req.query
    const filter = category ? {category} : {}

    bookModel.find(filter).populate("author").limit(limit).then((result)=>{
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