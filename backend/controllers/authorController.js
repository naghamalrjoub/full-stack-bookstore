const authorModel = require("../models/authorSchema");

const addAuthor = async (req, res) => {
    const author = new authorModel();
    const information = req.body;
    try {
        Object.keys(information).forEach(elem => {
            author[elem] = information[elem]
        })

        const saved = await author.save();
        res.status(201).json(saved)
    }

    catch(err) {
        res.status(201).json(err)
    }
}

const getAuthors = (req, res) => {
    authorModel.find({}).populate("books.book").then((result)=>{
        res.status(200).json(result)
    }).catch(err=>{
        res.status(500).json(err)
    })
}

const getAuthor = (req, res) => {
    const {id} = req.params;
    authorModel.findById(id).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })
}

const updateAuthor = (req, res) => {
    const {id} = req.params;
    authorModel.findByIdAndUpdate(id, req.body, {
        new: true, runValidators: true
    }).then((result)=>{
        res.status(200).json(result)
    }).catch(err=>{
        res.status(500).json(err)
    })
}

const deleteAuthor = (req, res) => {
    authorModel.findByIdAndDelete(id).then((result) => {
        res.status(204).json(result)
    }).catch(err=>{
        res.status(500).json(err)
    })
}

module.exports = {addAuthor, getAuthors, getAuthor, updateAuthor, deleteAuthor}