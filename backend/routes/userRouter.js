const express = require("express")
const userRouter = express.Router();
const {register, login, updateData, getUserData, getUsers} = require("../controllers/userController")
const cartRouter = require("../routes/cartRouter")
const wishlistRouter = require("../routes/wishlistRouter")
const favouriteRouter = require("../routes/favouriteRouter")
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization")

userRouter.post("/register", register)
userRouter.get("/profile", authentication, authorization("user"), getUserData)
userRouter.get("/profile/:id", authentication, authorization("admin"), getUserData)
userRouter.get("/", authentication, authorization("admin"), getUsers)
userRouter.post("/login", login)
userRouter.patch("/", authentication, authorization("user"), updateData)
userRouter.patch("/:id", authentication, authorization("admin"), updateData)
userRouter.use("/cart", authentication, authorization("admin", "user"), cartRouter)
userRouter.use("/wishlist", authentication, authorization("admin", "user"), wishlistRouter)
userRouter.use("/favourite", authentication, authorization("admin", "user"), favouriteRouter)

module.exports = userRouter;