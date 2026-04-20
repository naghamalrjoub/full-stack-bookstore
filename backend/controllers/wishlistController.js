const wishlistModel = require("../models/wishlistSchema");
const bookModel = require("../models/bookSchema")

const getWishlist = async (req, res) => {
    const {userId} = req.params;
    try {
        const wishlist = await wishlistModel.findOne({userId: userId}).populate("userId items.book")
        if (!wishlist) {
            res.status(404).json("not found")
        }

        else {
            res.status(200).json(wishlist)
        }
    }

    catch (err) {
        console.log(userId)
        res.status(500).json(err)
    }
}

const addToWishlist = async (req, res) => {
    const {userId, bookId} = req.params;
    // userid: 69e5fcdfd27d88217c36f06f
    // bookid: 69e358f99ce6a55cb96a78b3
    console.log(typeof(bookId))
    try {
        const wishlist = await wishlistModel.findOne({userId: userId});
        if (wishlist) {
            let inWishlist = wishlist.items.find((elem)=>{
                console.log(typeof(elem.book.toString()))
                return elem.book.toString() === bookId
            })

            if (inWishlist) {
                res.status(200).json("book already exists")
            }

            else {
                const book = await bookModel.findById(bookId);
                if (!book) {
                    res.status(404).json("no book with this id found")
                }

                else {
                    wishlist.items.push({
                        book: bookId,
                        price: book.price
                    })

                    const saved = await wishlist.save()
                    res.status(201).json(saved)
                }
            }
        }
    
        else {
            res.status(404).json("no wishlist found")
        }
    }

    catch (err){
        res.status(500).json(err)
    }
}

module.exports = {getWishlist, addToWishlist}