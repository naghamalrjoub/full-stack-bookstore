const express = require("express")
const userRouter = express.Router();
const {register, login, updateData, getUserData, getUsers} = require("../controllers/userController")
const cartRouter = require("../routes/cartRouter")
const wishlistRouter = require("../routes/wishlistRouter")
const favouriteRouter = require("../routes/favouriteRouter")
const authentication = require("../middlewares/authentication")
const {authorization, updateAuthorization} = require("../middlewares/authorization")

userRouter.post("/register", register)
userRouter.get("/profile/:username", getUserData)
userRouter.get("/", authentication, authorization("admin"), getUsers)
userRouter.post("/login", login)
userRouter.patch("/:username", authentication, authorization("admin", "user"), updateAuthorization, updateData)
userRouter.use("/cart", authentication, authorization("admin", "user"), updateAuthorization, cartRouter)
userRouter.use("/wishlist", authentication, authorization("admin", "user"), updateAuthorization, wishlistRouter)
userRouter.use("/favourite", authentication, authorization("admin", "user"), updateAuthorization, favouriteRouter)

module.exports = userRouter;