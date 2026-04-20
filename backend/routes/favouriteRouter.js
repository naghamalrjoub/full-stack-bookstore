const express = require("express")
const favouriteRouter = express.Router();
const {getFavourite, addToFavourite, removeFromFavourite} = require("../controllers/favouriteController")

favouriteRouter.get("/:userId", getFavourite)
favouriteRouter.patch("/:userId/:bookId", addToFavourite)
favouriteRouter.delete("/:userId/:bookId", removeFromFavourite)

module.exports = favouriteRouter