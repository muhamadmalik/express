import { Router } from 'express';
const bookRouter = Router();

bookRouter.get('/', (req, res) => {
  res.send('this is the book router.');
});

bookRouter.get('/:bookId', (req, res) => {
  const { bookId } = req.params;
  console.log('bookId', bookId);
});

export default bookRouter