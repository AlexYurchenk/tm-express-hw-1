const express = require('express');
const router = express.Router();
const { ReviewController } = require('../controllers/index.js');
const { isReviewExist, isReviewValid } = require('../middlewares/index.js');
const { isBookExist } = require('../../books/middlewares/index.js');
const reviewController = new ReviewController();
router.post('/', [isReviewValid], reviewController.createReview);
router.delete('/:id', [isReviewExist], reviewController.deleteReviewById);
router.get('/:id', [isBookExist], reviewController.getReviewsByBookId);

module.exports = router;
