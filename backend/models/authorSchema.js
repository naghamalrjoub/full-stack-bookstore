const mongoose = require("mongoose")
const authorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    books: [{
        book: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        }
    }],
    bio: {type: String, default: "no bio provided"},
    birthdate: {type: Date, default: "no info provided"},
    nationality: {type: String, default: "no info provided"}
})

module.exports = mongoose.model("Author", authorSchema)