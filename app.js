const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const booksRouter = require('./books/routes/index.js');
const reviewRouter = require('./reviews/routes/index.js');
const { errorHandler } = require('./middlewares.js');

const app = express();
const port = 3000;
const host = 'localhost';

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/books', booksRouter);
app.use('/review', reviewRouter);

app.use(errorHandler);

app.listen(port, host, () =>
    console.log(`Example app listening on  http://${host}:${port}`)
);
