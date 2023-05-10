const express = require('express');
const router = express.Router();

router.post('/', [isBookValid], bookController.createBook);
router.delete('/', bookController.getBooks);
router.get('/', [isBookExist], bookController.getBookById);

module.exports = router;
