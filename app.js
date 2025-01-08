const path = require('node:path');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');
const aboutRouter = require('./routes/aboutRouter');

app.use('/authors', authorRouter);
app.use('/books', bookRouter);
app.use('/', indexRouter);
app.use('/about', aboutRouter)

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
