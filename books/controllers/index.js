const uniqid = require('uniqid');
const { BookService } = require('../services/index.js');
const bookService = new BookService();

class BookController {
    async getBooks(_, res, next) {
        try {
            const books = await bookService.getBooks();
            return res.status(200).send({
                status: 200,
                data: books,
            });
        } catch (error) {
            next(error);
        }
    }
    async createBook(req, res, next) {
        try {
            const { title } = req.body;
            const newBook = { id: uniqid(), title };
            await bookService.createBook(newBook);
            return res.status(200).send({
                status: 200,
                data: newBook,
            });
        } catch (error) {
            next(error);
        }
    }
    async getBookById(req, res, next) {
        try {
            const { id } = req.params;
            const book = await bookService.getBookById(id);
            return res.status(200).send({
                status: 200,
                data: book,
            });
        } catch (error) {
            next(error);
        }
    }
    async updateBookById(req, res, next) {
        try {
            const { title } = req.body;
            const { id } = req.params;
            const newBook = { id, title };
            await bookService.updateBookById(id, newBook);
            return res.status(200).send({
                status: 200,
                data: newBook,
            });
        } catch (error) {
            next(error);
        }
    }
}
module.exports = { BookController };
