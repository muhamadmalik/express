import { Router } from 'express';
const indexRouter = Router();

const authors = ['Rose', 'Cake', 'Biff'];
const links = [
  { href: '/authors', text: 'Authors' },
  { href: '/books', text: 'Books' },
  { href: '/about', text: 'About' },
];

indexRouter.get('/', (req, res) => {
  res.render('index', {
    message: 'EJS Sucks ass!',
    links: links,
    authors: authors,
  });
});

export default indexRouter;
