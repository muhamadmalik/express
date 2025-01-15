import pg from 'pg';
const { Pool, Client } = pg;
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  password: 'mysecretpassword',
  port: 5432,
  database: 'top_users',
});

await client.connect();
await client.query(
  `UPDATE usernames SET age = 23, email = 'muhamadmalik@951@gmail.com', bio = 'this is the bio of david procter', username =  'Muhamad Malik' WHERE id = 5`
);
// await client.query(
//   "INSERT INTO usernames (username, age, email, bio) VALUES ('Rehman', 24, 'rehmanbashir951@gmail.com', 'Im a software engineering student in my 7th semester.')"
// );
const { rows } = await client.query('SELECT * FROM usernames');
// console.log(rows);

const authors = [
  { id: 1, name: 'Bryan' },
  { id: 2, name: 'Christian' },
  { id: 3, name: 'Jason' },
];

async function getAuthorById(authorId) {
  return authors.find((author) => author.id === authorId);
}

export default authors;
