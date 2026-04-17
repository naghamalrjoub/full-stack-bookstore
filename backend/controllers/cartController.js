const cartModel = require("../models/cartSchema");

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

module.exports = {getCart}