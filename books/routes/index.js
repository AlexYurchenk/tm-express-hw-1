const express = require('express');
const { BookController } = require('../controllers/index.js');
const { isBookExist, isBookValid } = require('../middlewares/index.js');
const router = express.Router();
const bookController = new BookController();
router.post('/', [isBookValid], bookController.createBook);
router.get('/', bookController.getBooks);
router.get('/:id', [isBookExist], bookController.getBookById);
router.patch('/:id', [isBookValid, isBookExist], bookController.updateBookById);

module.exports = router;
