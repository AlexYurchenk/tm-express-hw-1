const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const booksRouter = require('./books/routes/index.js');

const app = express();
const port = 3000;
const host = 'localhost';

const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).send({
        code: 500,
        message: err.message,
        data: 'Internal Server Error',
    });
};
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/books', booksRouter);

app.use(errorHandler);

app.listen(port, host, () =>
    console.log(`Example app listening on  http://${host}:${port}`)
);
