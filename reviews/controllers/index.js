const uniqid = require('uniqid');
const { ReviewService } = require('../services/index.js');
const reviewService = new ReviewService();

class ReviewController {
    async createReview(req, res, next) {
        try {
            const { title, reviewTo } = req.body;
            const newReview = { id: uniqid(), title, reviewTo };
            await reviewService.createReview(newReview);
            return res.status(200).send({
                status: 201,
                data: newReview,
            });
        } catch (error) {
            next(error);
        }
    }
    async getReviewsByBookId(req, res, next) {
        try {
            const { id } = req.params;
            const reviews = await reviewService.getReviewByBookId(id);

            return res.status(200).send({
                status: 200,
                data: reviews,
            });
        } catch (error) {
            next(error);
        }
    }
    async deleteReviewById(req, res, next) {
        try {
            const { id } = req.params;
            const reviews = await reviewService.deleteReviewById(id);
            return res.status(200).send({
                status: 202,
                data: reviews,
            });
        } catch (error) {
            next(error);
        }
    }
}
module.exports = { ReviewController };
