const express = require("express");
const authorRouter = express.Router();
const {addAuthor, getAuthors, getAuthor, updateAuthor, deleteAuthor} = require("../controllers/authorController")

authorRouter.post("/", addAuthor)
authorRouter.get("/", getAuthors)
authorRouter.get("/:id", getAuthor)
authorRouter.patch("/:id", updateAuthor)
authorRouter.delete("/:id", deleteAuthor)

module.exports = authorRouter