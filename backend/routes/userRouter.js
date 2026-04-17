const express = require("express")
const userRouter = express.Router();
const {register, login, updateData, getUserData, getUsers} = require("../controllers/userController")
const cartRouter = require("../routes/cartRouter")

userRouter.post("/register", register)
userRouter.get("/profile/:username", getUserData)
userRouter.get("/", getUsers)
userRouter.post("/login", login)
userRouter.patch("/:username", updateData)
userRouter.use("/cart", cartRouter)

module.exports = userRouter;