const { BookService } = require('../services/index.js');
const { BookSchema } = require('../models/index.js');
const bookService = new BookService();

const isBookExist = async (req, res, next) => {
    try {
        const { id } = req.params;
        const book = await bookService.getBookById(id);
        if (!book) {
            throw new Error('Book was not founded');
        }
        next();
    } catch (error) {
        res.status(404).send({
            code: 404,
            message: error.message,
        });
    }
};
const isBookValid = (req, res, next) => {
    try {
        const { title } = req.body;
        console.log(1);
        const result = BookSchema.validate({ title });

        if (result.error) {
            throw new Error(result.error);
        }
        next();
    } catch (error) {
        res.status(400).send({
            code: 400,
            message: error.message,
        });
    }
};
module.exports = { isBookExist, isBookValid };
