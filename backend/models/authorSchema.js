const mongoose = require("mongoose")
const authorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    bio: {type: String, default: "no bio provided"},
    birthdate: {type: Date},
    nationality: {type: String, default: "no info provided"}
})

module.exports = mongoose.model("Author", authorSchema)