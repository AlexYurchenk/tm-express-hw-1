const path = require('path');
const fs = require('fs').promises;
const { ReviewService } = require('../../reviews/services/index.js');
const reviewService = new ReviewService();
class BookService {
    #pathToDB = path.resolve('./db/books.json');
    async getBooks() {
        const books = JSON.parse(
            (await fs.readFile(this.#pathToDB)).toString()
        );
        for (const book of Object.keys(books)) {
            books[book].reviews = await reviewService.getReviewByBookId(
                books[book].id
            );
        }

        return books;
    }
    async createBook(book) {
        const books = await this.getBooks();
        books[book.id] = book;
        return fs.writeFile(
            this.#pathToDB,
            JSON.stringify(
                Object.keys(books).reduce((acc, v) => {
                    acc[v] ? (acc[v] = acc[v]) : (acc[v] = books[v]);
                    return acc;
                }, {})
            )
        );
    }
    async getBookById(id) {
        const books = await this.getBooks();
        return books[id];
    }
    async updateBookById(id, newBook) {
        const books = await this.getBooks();
        books[id] = newBook;
        return fs.writeFile(
            this.#pathToDB,
            JSON.stringify(
                Object.keys(books).reduce((acc, v) => {
                    acc[v] ? (acc[v] = acc[v]) : (acc[v] = books[v]);
                    return acc;
                }, {})
            )
        );
    }
}
module.exports = { BookService };
