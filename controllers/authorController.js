import expressAsyncHandler from 'express-async-handler';
import authors from '../db.js';
import CustomNotFoundError from '../errors/CustomeNotFoundError.js';
const db = authors;
const asyncHandler = expressAsyncHandler;
const getAuthorById = asyncHandler(async (req, res) => {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));
  console.log(author);
  if (!author) {
    throw new CustomNotFoundError('Author not found.');
  }
  res.send(`Author Name: ${author.name}`);
});

export default getAuthorById;
