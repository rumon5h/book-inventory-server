const mongoose = require("mongoose");

const booksSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for the book"],
      trim: true,
      unique: true,
      minLength: [3, "Name must be at least 3 characters long."],
      maxLength: [200, "Name can't be more than 200 characters."],
    },
    description: {
      type: String,
      required: [true, "Please provide a description for the book"],
      trim: true,
      minLength: [10, "Description must be at least 10 characters long."],
    },
    image: {
      type: String,
      required: true,
    },
    available: {
      type: Number,
      required: true,
      min: 0,
    },
    author: {
      type: String,
      required: [true, "Author name is required."],
    },
    price: {
      type: Number,
      required: [true, "Price is required."],
    },
  },
  {
    timestamps: true,
  }
);

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;

// https://i.ibb.co/qNSDjs8/banner.png