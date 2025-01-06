const { Router } = require('express');

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
  res.send('this is the index router were using here.');
});

module.exports = indexRouter;
