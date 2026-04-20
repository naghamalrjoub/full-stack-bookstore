const express = require("express")
const wishlistRouter = express.Router();
const {getWishlist, addToWishlist, removeFromWishlist} = require("../controllers/wishlistController")

wishlistRouter.get("/:userId", getWishlist)
wishlistRouter.patch("/:userId/:bookId", addToWishlist)
wishlistRouter.delete("/:userId/:bookId", removeFromWishlist)

module.exports = wishlistRouter