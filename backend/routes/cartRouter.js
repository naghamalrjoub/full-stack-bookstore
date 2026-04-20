const express = require("express");
const cartRouter = express.Router();
const {getCart, addToCart, removeWholeItem, decItem, incItem} = require("../controllers/cartController");

cartRouter.get("/:id", getCart);
cartRouter.patch("/:id/:bookId", addToCart);
cartRouter.delete("/:id/:bookId", removeWholeItem);
cartRouter.delete("/:id/dec/:bookId", decItem);
cartRouter.patch("/:id/inc/:bookId", incItem);

module.exports = cartRouter