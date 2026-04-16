const express = require("express")
const bookRouter = express.Router();
const {addBook, getAllBooks, updateData, getBook, deleteBook} = require("../controllers/bookController")

bookRouter.post("/", addBook);
bookRouter.get("/", getAllBooks);
bookRouter.patch("/:id", updateData);
bookRouter.get("/:id", getBook);
bookRouter.delete("/:id", deleteBook);

module.exports = bookRouter
