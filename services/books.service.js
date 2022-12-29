const Books = require('../models/Books');

exports.getBooksService =async () => {
    const books = await Books.find({});
    
    return books;
}

exports.createNewBookService = async (book) => {
    const result = await Books.create(book);

    return result;
}

exports.getBookByIdService = async (id) => {
    const book = await Books.findOne({_id: id});

    return book;
}