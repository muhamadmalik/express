import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import session from 'express-session';
import passport from 'passport';
import query from './db.js';
import LocalStrategy from 'passport-local';
import bcrypt from 'bcryptjs/dist/bcrypt.js';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({ secret: 'cats', resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const { rows } = await query('SELECT * FROM users WHERE name = $1', [
        username,
      ]);
      const user = rows[0];

      if (!user) {
        return done(null, false, { message: 'Incorrect username' });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        // passwords do not match!
        return done(null, false, { message: "Incorrect password" })
      }
      
      return done(null, user);
    } catch (err) { 
      return done(err);
    }
  })
);
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const { rows } = await query('SELECT * FROM users WHERE id = $1', [
      id,
    ]);
    const user = rows[0];

    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.get('/', (req, res) => {
  res.render('index', { user: req.user });
});
app.get('/sign-up', (req, res) => res.render('sign-up-from'));

app.post("/sign-up", async (req, res, next) => {
    try {
     const hashedPassword = await bcrypt.hash(req.body.password, 10);
     await query("insert into users (name , password) values ($1, $2)", [req.body.username, hashedPassword]);
     res.redirect("/");
    } catch (error) {
       console.error(error);
       next(error);
      }
   });
   
app.post(
  '/log-in',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/',
  })
);
app.get("/log-out", (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  });
  
app.set('views', join(__dirname, 'views'));

app.listen(3000, () => console.log('app listening on port 3000!'));
