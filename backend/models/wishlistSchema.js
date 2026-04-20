const mongoose = require("mongoose")
const wishlistSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },

    items: [{
        book: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        }, 
        price: {type: Number, required: true},
        addedAt: {type: Date, default: Date.now}
    }]
    
}, {timestamps: true})

module.exports = mongoose.model("Wishlist", wishlistSchema)