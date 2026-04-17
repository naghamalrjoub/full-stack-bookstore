const express = require("express");
const cartRouter = express.Router();
const {getCart, addToCart} = require("../controllers/cartController");

cartRouter.get("/:id", getCart);
cartRouter.patch("/:id", addToCart); // 69e2894046481cc1bb052c33

module.exports = cartRouter