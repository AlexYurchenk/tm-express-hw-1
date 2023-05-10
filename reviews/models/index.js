const Joi = require('joi');

const ReviewSchema = Joi.object({
    title: Joi.string().required(),
    reviewTo: Joi.string().required(),
});

module.exports = { ReviewSchema };
