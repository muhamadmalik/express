// controllers/authorController.js

const db = require('../db');

async function getAuthorById(req, res) {
  try {
    const { authorId } = req.params;

    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
      res.status(404).send('Author not found');
      return;
    }
  } catch (error) {
    console.error('Error retrieving author: ', error);
    res.status(500).send('Internal Server Error');
  }

  res.send(`Author Name: ${author.name}`);
}

module.exports = { getAuthorById };
