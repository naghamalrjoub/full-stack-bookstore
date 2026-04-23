const mongoose = require("mongoose");
const axios = require("axios");
const Author = require("./models/authorSchema");
const Book = require("./models/bookSchema");

mongoose.connect("mongodb://127.0.0.1:27017/book-store");

const queries = [
    "philosophy", "history", "religion",
    "fiction", "fantasy", "science-fiction",
    "mystery", "horror", "self-help"
];

async function fetchAndStore(elem) {
    try {
        const res = await axios.get(
            `https://openlibrary.org/search.json?q=${elem}&limit=10` // ← fixed & 
        );

        const booksData = res.data.docs;

        for (let item of booksData) {
            if (!item.author_name) continue;

            const authorName = item.author_name[0];

            let author = await Author.findOne({ name: authorName });
            if (!author) {
                author = await Author.create({ name: authorName });
            }

            await Book.create({
                title: item.title,
                category: elem,
                author: author._id,
                price: Math.floor(Math.random() * 20) + 10,
                description: item.title + " by " + authorName,
                image: item.cover_i
                    ? `https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`
                    : ""
            });
        }

        console.log(`✅ Books inserted for: ${elem}`)

    } catch (err) {
        console.log(`❌ Failed for ${elem}:`, err.message)
    }
}

async function main() {
    for (let elem of queries) { // ← fixed for...of
        await fetchAndStore(elem)
    }
    console.log("✅ All done!")
    process.exit() // ← moved here, runs once after everything
}

main()