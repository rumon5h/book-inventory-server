const Books = require('../models/Books');

exports.getBooksService =async () => {
    const books = await Books.find({});
    
    return books;
}
