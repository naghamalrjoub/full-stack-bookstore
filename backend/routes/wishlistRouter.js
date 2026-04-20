const express = require("express")
const wishlistRouter = express.Router();
const {getWishlist, addToWishlist} = require("../controllers/wishlistController")

wishlistRouter.get("/:userId", getWishlist)
wishlistRouter.patch("/:userId/:bookId", addToWishlist)

module.exports = wishlistRouter