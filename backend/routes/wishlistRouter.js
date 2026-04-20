const express = require("express")
const wishlistRouter = express.Router();
const {getWishlist, addToWishlist, removeFromWishlist} = require("../controllers/wishlistController")

wishlistRouter.get("/", getWishlist)
wishlistRouter.patch("/:bookId", addToWishlist)
wishlistRouter.delete("/:bookId", removeFromWishlist)

module.exports = wishlistRouter