const Joi = require('joi');

const BookSchema = Joi.object({
    title: Joi.string().required(),
});

module.exports = { BookSchema };
