import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import authorRouter from './routes/authorRouter.js';
import bookRouter from './routes/bookRouter.js';
import indexRouter from './routes/indexRouter.js';
import aboutRouter from './routes/aboutRouter.js';
import userRouter from './routes/userRouter.js';
import newRouter from './routes/newRouter.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');
const assetsPath = join(__dirname, 'public');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));

app.use('/', indexRouter);
app.use('/authors', authorRouter);
app.use('/books', bookRouter);
app.use('/about', aboutRouter);
app.use('/user', userRouter);
app.use('/new', newRouter);
// app.use('/search', searchRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
