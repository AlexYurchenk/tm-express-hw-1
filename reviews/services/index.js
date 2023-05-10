const path = require('path');
const fs = require('fs').promises;

class ReviewService {
    #pathToDB = path.resolve('./db/review.json');
    async #getReviews() {
        const reviews = JSON.parse(
            (await fs.readFile(this.#pathToDB)).toString()
        );
        return reviews;
    }
    async createReview(review) {
        const reviews = await this.#getReviews();
        reviews[review.id] = review;
        return fs.writeFile(
            this.#pathToDB,
            JSON.stringify(
                Object.keys(reviews).reduce((acc, v) => {
                    acc[v] ? (acc[v] = acc[v]) : (acc[v] = reviews[v]);
                    return acc;
                }, {})
            )
        );
    }
    async getReviewByBookId(id) {
        const reviews = await this.#getReviews();
        return Object.values(reviews).filter((r) => r.reviewTo === id);
    }
    async deleteReviewById(id) {
        const reviews = await this.#getReviews();
        delete reviews[id];
        fs.writeFile(
            this.#pathToDB,
            JSON.stringify(
                Object.keys(reviews).reduce((acc, v) => {
                    acc[v] ? (acc[v] = acc[v]) : (acc[v] = reviews[v]);
                    return acc;
                }, {})
            )
        );
        return reviews;
    }
    async getReviewById(id) {
        const reviews = await this.#getReviews();
        return reviews[id];
    }
}
module.exports = { ReviewService };
