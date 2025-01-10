import { Router } from 'express';
const aboutRouter = Router();
aboutRouter.get('/', (req, res) => {
  res.render('about');
});

export default aboutRouter;
