const mongoose = require('mongoose');
const validator = require('validator');


const booksSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for the book"],
        trim: true,
        unique: true,
        minLength: [3, "Name must be at least 3 characters long."],
        maxLength: [200, "Name can't be more than 200 characters."]
    },
    description: {
        type: String,
        required: [true, "Please provide a description for the book"],
        trim: true,
        minLength: [10, "Description must be at least 10 characters long."],
    },
    imageURLs:[{
        type: String,
        required: true,
        validate: () => {
            validator: (value) => {
                if(!Array.isArray(value)){
                    return false;
                }
                let isValid = true;
                value.forEach(url => {
                    if(!validator.isURL(url)){
                        isValid = false;
                    }
                })
                return isValid;
            };
            message: 'please provide valid image URLs'
        }
    }],
    available: {
        type: Number,
        required: true,
        min: 0
    },
    author:{
        type: String,
        required: [true, "Author name is required."],
    },
    price:{
        type: Number,
        required: [true, 'Price is required.']
    }
}, {
    timestamps: true
});

const Books = mongoose.model('Books', booksSchema);

module.exports = Books;
