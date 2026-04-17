const express = require("express")
const apiRouter = express.Router();
const userRouter = require("../routes/userRouter")
const bookRouter = require("../routes/bookRouter")
const authorRouter = require("../routes/authorRouter")

apiRouter.use("/user", userRouter)
apiRouter.use("/book", bookRouter)
apiRouter.use("/author", authorRouter)

module.exports = apiRouter;