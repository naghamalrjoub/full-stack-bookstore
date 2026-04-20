const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const cartModel = require("../models/cartSchema");
const wishlistModel = require("../models/wishlistSchema")
const favouriteModel = require("../models/favouriteSchema")
const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    image: {type: String},
    role: {
        type: String, 
        enum: ["user", "admin"],
        default: "user"
    }
})

userSchema.pre("save", async function(){
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.post("save", async function(){
    try {
        const cart = new cartModel({
            userId: this._id,
            total: 0,
            items: []
        })

        const wishlist = new wishlistModel({
            userId: this._id,
            items: []
        })

        await cart.save();
        await wishlist.save()

        const favourite = new favouriteModel({
            userId: this._id,
            items: []
        })

        await favourite.save()
    }

    catch (err) {
        console.error(err);
        throw err;
    }
})

module.exports = mongoose.model("User", userSchema)