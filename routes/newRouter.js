import { Router } from 'express';
import getAuthorById from '../controllers/authorController.js';

const newRouter = Router();

newRouter.get('/', (req, res) => {
  console.log('username to be saved:', req.body.username);
  res.render();
});

// authorRouter.get('/:authorId', getAuthorById);

export default newRouter;
