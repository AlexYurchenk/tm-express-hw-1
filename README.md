Create simple server for "Books and review for books" application using ExpressJs.

Requirements:

Create a simple server using Node.js. Use Express.js as a web framework.

Setup test data as books array. Book items should have id, tittle and reviews (array) properties. Post should have id and comment properties.

1. Create simple folder architecture

2. Create App-level Middlewares

Body parsing
Error handling(appropriate StatusCodes)
3rd-party (optional) 3. Create router-level Middlewares:

Validate if book exist
Validate if review exist 4. Create Middleware for specific route: validate req.body for /create

5. API should provide the ability to perform the following actions:

create book
get list of books
get book by id
edit book title
add review for a book
delete review by id
receive list of reviews by book id

IMPORTANT! API path should be named using REST naming convention
