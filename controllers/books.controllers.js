const { getBooksService, createNewBookService, getBookByIdService } = require("../services/books.service")


exports.getBooks = async (req, res) => {
    try {
        const result = await getBooksService();

        res.status(200).json({
            status: "success",
            message: 'Successfully received the books.',
            data: result
        })
        
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: 'Failed to get the books',
            error: error.message
        })
    }
}

exports.createNewBook = async(req, res) => {
    try {
        const book = req.body;

        const result = await createNewBookService(book);
        console.log(result);
        res.status(200).json({
            status: 'success',
            message: 'Successfully created the book.',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: 'Failed to create a new book',
            error: error.message
        })
    }
}

exports.getBookById = async(req, res) => {
    try {
        const {id} = req.params;

        const result = await getBookByIdService(id);
        res.status(400).json({
            status: 'success',
            message: 'Successfully get the book.',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: 'Failed to get book',
            error: error.message
        })
    }
}