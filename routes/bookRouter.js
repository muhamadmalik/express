const { Router } = require('express');

const bookRouter = Router();

bookRouter.get('/', (req, res) => {
  res.send('this is the book router.');
});

bookRouter.get('/:bookId', (req, res) => {
  const { bookId } = req.params;
  console.log('bookId', bookId);
});

module.exports = bookRouter;