const cartModel = require("../models/cartSchema");
const bookModel = require("../models/bookSchema");

const getCart = async (req, res) => {
    const {id} = req.params;
    console.log(id)
    try {
        const cart = await cartModel.findOne({userId: id}).populate("userId items.book")
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
    const {id, bookId} = req.params;
    console.log(bookId)

    try {
        const cart = await cartModel.findOne({userId: id})
        if (!cart) {
            res.status(404).json("not found")
        }
        else {
            const _book = await bookModel.findOne({_id: bookId})
            const bookPrice = _book.price
            let exists = cart.items.find(elem => {
                return elem.book.toString() === bookId
            })

            if (exists) {
                exists.quantity += 1;
                exists.price = _book.price
            }

            else {
                cart.items.push({
                    book: bookId, 
                    price: _book.price,
                    quantity: 1
                })
            }

            cart.total += bookPrice;
            const saved = await cart.save()
            await cart.populate("items.book")
            res.status(200).json(saved)
        }
    }

    catch(err) {
        res.status(500).json(err)
    }

}

const removeWholeItem = async (req, res) => {
    const {id, bookId} = req.params;
    try {
        const cart = await cartModel.findOne({userId: id})
        let book = cart.items.find(elem => {
            return elem.book.toString() === bookId
        })
        console.log(book)

        if (!book) {
            res.status(404).json("not found")
        }

        else {
            cart.total -= (book.price * book.quantity);
            book.quantity = (0)
            cart.items = cart.items.filter((elem)=>{
                return elem.book.toString() === bookId
            })

            const saved = await cart.save()
            res.status(200).json(saved)
        }
    }

    catch (err) {
        res.status(500).json(err)
    } 
}

const decItem = async (req, res) => {
    const {id, bookId} = req.params;
    try {
        const cart = await cartModel.findOne({userId: id})
        let book = cart.items.find(elem => {
            return elem.book.toString() === bookId
        })
        console.log(book)

        if (!book) {
            res.status(404).json("not found")
        }

        else {
            cart.total -= (book.price)
            book.quantity -= 1;
            if (book.quantity === 0)
                cart.items = cart.items.filter((elem)=>{
                    return elem.book.toString() === bookId
                })

            const saved = await cart.save()
            res.status(200).json(saved)
        }
    }

    catch (err) {            
        res.status(500).json(err)
    } 
}

const incItem = async (req, res) => {
    const {id, bookId} = req.params;
    try {
        const cart = await cartModel.findOne({userId: id})
        let book = cart.items.find(elem => {
            return elem.book.toString() === bookId
        })
        console.log(book)

        if (!book) {
            res.status(404).json("not found")
        }

        else {
            cart.total += (book.price)
            book.quantity += 1;

            const saved = await cart.save()
            res.status(200).json(saved)
        }
    }

    catch (err) {            
        res.status(500).json(err)
    } 
}

module.exports = {getCart, addToCart, removeWholeItem, decItem, incItem}