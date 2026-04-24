const favouriteModel = require("../models/favouriteSchema");
const bookModel = require("../models/bookSchema")

const getFavourite = async (req, res) => {
    const userId = req.user._id;
    try {
        const favourite = await favouriteModel.findOne({userId: userId}).populate("userId items.book")
        if (!favourite) {
            res.status(404).json("not found")
        }

        else {
            res.status(200).json(favourite)
        }
    }

    catch (err) {
        console.log(userId)
        res.status(500).json(err)
    }
}

const addToFavourite = async (req, res) => {
    const userId = req.user._id;
    const {bookId} = req.params;
    try {
        const favourite = await favouriteModel.findOne({userId: userId});
        if (favourite) {
            let inFavourite = favourite.items.find((elem)=>{
                return elem.book.toString() === bookId
            })

            if (inFavourite) {
                res.status(200).json("book already exists")
            }

            else {
                const book = await bookModel.findById(bookId);
                if (!book) {
                    res.status(404).json("no book with this id found")
                }

                else {
                    favourite.items.push({
                        book: bookId,
                        price: book.price
                    })

                    const saved = await favourite.save()
                    await saved.populate("items.book")
                    res.status(201).json(saved)
                }
            }
        }
    
        else {
            res.status(404).json("no favourite list found")
        }
    }

    catch (err){
        res.status(500).json(err)
    }
}

const removeFromFavourite = async (req, res) => {
    const userId = req.user._id;
    const {bookId} = req.params;
    try {
        const favourite = await favouriteModel.findOne({userId: userId});
        if (favourite) {
            let inFavourite = favourite.items.find((elem)=>{
                return elem.book.toString() === bookId
            })

            if (!inFavourite) {
                res.status(404).json("book doesn't exists in favourite")
            }

            else {
                const book = await bookModel.findById(bookId);
                if (!book) {
                    res.status(404).json("no book with this id found")
                }

                else {
                    console.log("here")
                    favourite.items = favourite.items.filter((elem) => {
                        return elem.book.toString() !== bookId
                    })

                    const saved = await favourite.save()
                    await saved.populate("items.book")
                    res.status(201).json(saved)
                }
            }
        }
    
        else {
            res.status(404).json("no favourite found")
        }
    }

    catch (err){
        res.status(500).json(err)
    }
}

module.exports = {getFavourite, addToFavourite, removeFromFavourite}