const mongoose = require("mongoose")
const favouriteSchema = new mongoose.Schema({
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
        addedAt: {type: Date, default: Date.now}
    }]
    
}, {timestamps: true})

module.exports = mongoose.model("Favourite", favouriteSchema)