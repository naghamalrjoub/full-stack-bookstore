require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors");
app.use(cors())
app.use(express.json());
const db = require("./models/db")

const apiRouter = require("./routes/api")
app.use("/api", apiRouter)

app.listen(process.env.PORT, ()=> {
    console.log(`server successfully running on port ${process.env.PORT}`)
})