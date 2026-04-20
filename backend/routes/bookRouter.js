const express = require("express")
const bookRouter = express.Router();
const {addBook, getAllBooks, updateData, getBook, deleteBook} = require("../controllers/bookController")
const authentication = require("../middlewares/authentication")
const {authorization, updateAuthorization} = require("../middlewares/authorization")

bookRouter.post("/", authentication, authorization("admin"), addBook);
bookRouter.get("/", getAllBooks);
bookRouter.patch("/:id", authentication, authorization("admin"), updateData);
bookRouter.get("/:id", getBook);
bookRouter.delete("/:id", authentication, authorization("admin"), deleteBook);

module.exports = bookRouter
