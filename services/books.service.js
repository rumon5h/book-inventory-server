const Books = require('../models/Books');

exports.getBooksService =async () => {
    const books = await Books.find({});
    
    return books;
}

exports.createNewBookService = async (book) => {
    const result = await Books.create(book);
    console.log(result);
    return result;
}