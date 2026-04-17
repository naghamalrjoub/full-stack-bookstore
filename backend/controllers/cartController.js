const cartModel = require("../models/cartSchema");
const bookModel = require("../models/bookSchema");

const getCart = async (req, res) => {
    const {id} = req.params;
    console.log(id)
    try {
        const cart = await cartModel.findOne({userId: id}).populate("userId")
        if (!cart) {
            res.status(404).json("not found")
        }

        else {
            res.status(200).json(cart)
        }
    }
    catch (err) {
        console.log("error here")
        res.status(500).json(err)
    }
}

const addToCart = async (req, res) => {
    const {book} = req.body;
    const {id} = req.params;

    try {
        const cart = await cartModel.findOne({userId: id})
        if (!cart) {
            res.status(404).json("not found")
        }
        else {
            const _book = await bookModel.findOne({_id: book})
            const bookPrice = _book.price
            let exists = cart.items.find(elem => {
                return elem.book = book
            })

            if (exists) {
                exists.quantity += 1;
            }

            else {
                cart.items.push({
                    book: book, 
                    quantity: 1,
                })
            }
            
            cart.total += bookPrice;
            const saved = await cart.save()
            await saved.populate("items.book")
            res.status(200).json(saved)
        }
    }

    catch(err) {
        res.status(500).json(err)
    }

}

module.exports = {getCart, addToCart}