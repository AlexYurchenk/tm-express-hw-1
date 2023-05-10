const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).send({
        code: 500,
        message: err.message,
        data: 'Internal Server Error',
    });
};
module.exports = { errorHandler };
