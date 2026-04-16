const express = require("express")
const apiRouter = express.Router();
const userRouter = require("../routes/userRouter")
const bookRouter = require("../routes/bookRouter")

apiRouter.use("/user", userRouter)
apiRouter.use("/book", bookRouter)

module.exports = apiRouter;