const express = require("express")
const favouriteRouter = express.Router();
const {getFavourite, addToFavourite, removeFromFavourite} = require("../controllers/favouriteController")

favouriteRouter.get("/", getFavourite)
favouriteRouter.patch("/:bookId", addToFavourite)
favouriteRouter.delete("/:bookId", removeFromFavourite)

module.exports = favouriteRouter