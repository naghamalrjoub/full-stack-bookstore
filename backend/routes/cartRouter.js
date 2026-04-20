const express = require("express");
const cartRouter = express.Router();
const {getCart, addToCart, removeWholeItem, decItem, incItem} = require("../controllers/cartController");

cartRouter.get("/", getCart);
cartRouter.patch("/:bookId", addToCart);
cartRouter.delete("/:bookId", removeWholeItem);
cartRouter.delete("/dec/:bookId", decItem);
cartRouter.patch("/inc/:bookId", incItem);

module.exports = cartRouter