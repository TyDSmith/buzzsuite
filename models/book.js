const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: false },
  authors: { type: Array, required: false },
  description: String,
  image: { type: Object, required: false },
  link: { type: String, required: false, unique: false }
});

const Book = mongoose.model("google-books", bookSchema);

module.exports = Book;
