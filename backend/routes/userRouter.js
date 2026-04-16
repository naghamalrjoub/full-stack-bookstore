const express = require("express")
const userRouter = express.Router();
const {register, login, updateData, getUserData, getUsers} = require("../controllers/userController")

userRouter.post("/register", register)
userRouter.get("/profile/:username", getUserData)
userRouter.get("/", getUsers)
userRouter.post("/login", login)
userRouter.patch("/:username", updateData)

module.exports = userRouter;