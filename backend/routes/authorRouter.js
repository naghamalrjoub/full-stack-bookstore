const express = require("express");
const authorRouter = express.Router();
const {addAuthor, getAuthors, getAuthor, updateAuthor, deleteAuthor} = require("../controllers/authorController")
const authentication = require("../middlewares/authentication")
const {authorization, updateAuthorization} = require("../middlewares/authorization")

authorRouter.post("/", authentication, authorization("admin"), addAuthor)
authorRouter.get("/", getAuthors)
authorRouter.get("/:id", getAuthor)
authorRouter.patch("/:id", authentication, authorization("admin"), updateAuthor)
authorRouter.delete("/:id", authentication, authorization("admin"), deleteAuthor)

module.exports = authorRouter