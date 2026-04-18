const express = require("express");
const cartRouter = express.Router();
const {getCart, addToCart, removeWholeItem} = require("../controllers/cartController");

cartRouter.get("/:id", getCart);
cartRouter.patch("/:id/:bookId", addToCart);
cartRouter.delete("/:id/:bookId", removeWholeItem);

module.exports = cartRouter