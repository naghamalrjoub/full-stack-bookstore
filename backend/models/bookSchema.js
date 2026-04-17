const mongoose = require("mongoose")
const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    releaseDate: {type: Date},
    category: {type: String},
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Author"
    },
    price: {type: Number, required: true},
    description: {type: String},
    image: {type: String}
})

module.exports = mongoose.model("Book", bookSchema)