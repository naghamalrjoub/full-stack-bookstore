const express = require("express")
const app = express()
app.use(express.json());
require("dotenv").config()
const db = require("./models/db")

const apiRouter = require("./routes/api")
app.use("/api", apiRouter)

app.listen(process.env.PORT, ()=> {
    console.log(`server successfully running on port ${process.env.PORT}`)
})