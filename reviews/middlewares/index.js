const { ReviewService } = require('../services/index.js');
const { ReviewSchema } = require('../models/index.js');
const reviewService = new ReviewService();

const isReviewExist = async (req, res, next) => {
    try {
        const { id } = req.params;
        const review = await reviewService.getReviewById(id);
        if (!review) {
            throw new Error('Review was not founded');
        }
        next();
    } catch (error) {
        res.status(404).send({
            code: 404,
            message: error.message,
        });
    }
};
const isReviewValid = (req, res, next) => {
    try {
        const { title, reviewTo } = req.body;
        const result = ReviewSchema.validate({ title, reviewTo });

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
module.exports = { isReviewExist, isReviewValid };
