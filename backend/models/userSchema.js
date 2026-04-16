const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    image: {type: String}
})

userSchema.pre("save", async function(){
    this.password = await bcrypt.hash(this.password, 10)
})

module.exports = mongoose.model("User", userSchema)