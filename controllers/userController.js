// userController.js
import UserStorage from '../UsersStorage/UserStorage.js';
import { body, validationResult } from 'express-validator';
import client from '../db/db.js';
import { getAllUsernames } from '../db/queries.js';

const usersStorage = UserStorage;

export const usersListGet = async (req, res) => {
  // console.log(UserStorage.getUsers()),
  res.render('user/index', {
    title: 'User list',
    users: await getAllUsernames(),
  });
};

export const usersCreateGet = (req, res) => {
  res.render('createUser', {
    title: 'Create user',
  });
};

const alphaErr = 'must only contain letters.';
const lengthErr = 'must be between 1 and 10 characters.';

const validateUser = [
  body('firstName')
    .trim()
    .isAlpha()
    .withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`First name ${lengthErr}`),
  body('lastName')
    .trim()
    .isAlpha()
    .withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: 10 }),
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email address')
    .normalizeEmail(),

  body('age')
    .isInt({ min: 0, max: 120 })
    .withMessage('Age must be a number between 0 and 120')
    .optional({ nullable: true }),

  body('bio')
    .isLength({ min: 0, max: 100 })
    .withMessage('Bio must be between 0 and 100 characters long')
    .trim(), // S
];

export const usersCreatePost = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render('createUser', {
        title: 'Create user',
        errors: errors.array(),
      });
    }
    const { firstName, lastName, email, age, bio } = req.body;
    usersStorage.addUser({ firstName, lastName, email, age, bio });
    res.redirect('/user');
  },
];

export const usersUpdateGet = (req, res) => {
  const user = usersStorage.getUser(req.params.id);
  res.render('updateUser', {
    title: 'Update user',
    user: user,
  });
};

export const usersUpdatePost = [
  validateUser,
  (req, res) => {
    const user = usersStorage.getUser(req.params.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render('updateUser', {
        title: 'Update user',
        user: user,
        errors: errors.array(),
      });
    }
    const { firstName, lastName } = req.body;
    usersStorage.updateUser(req.params.id, { firstName, lastName });
    res.redirect('/user');
  },
];

export const usersDeletePost = (req, res) => {
  usersStorage.deleteUser(req.params.id);
  res.redirect('/');
};

export const usersSearchGet = (req, res) => {
  const firstName = req.query.firstName;
  const user = UserStorage.searchUser(firstName);
  res.render('search', { user: { ...user } });
};

async function getUsernames(req, res) {
  // const usernames = await db.getAllUsernames();
  // console.log('Usernames: ', usernames);
  // res.send('Usernames: ' + usernames.map((user) => user.username).join(', '));
}

async function createUsernameGet(req, res) {
  // render the form
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect('/');
}

export { getUsernames, createUsernameGet, createUsernamePost };
