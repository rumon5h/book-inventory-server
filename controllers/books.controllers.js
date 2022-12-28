const { getBooksService } = require("../services/books.service")


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




