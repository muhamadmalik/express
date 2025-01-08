const path = require('node:path');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const links = [
  { href: '/authors', text: 'Authors' },
  { href: '/books', text: 'Books' },
];
const authors  = ["Rose", "Cake", "Biff"];

const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');

app.use('/authors', authorRouter);
app.use('/books', bookRouter);
// app.use('/', indexRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});

app.get('/', (req, res) => {
  res.render('index', { message: 'EJS Sucks ass!', links: links, authors: authors });
});
