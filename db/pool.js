import pg from 'pg';
const { Pool, Client } = pg;
 new Pool({
    host: "localhost",
    user: "<role_name>",
    database: "top_users",
    password: "<role_password>",
    port: 5432 
  });

const authors = [
  { id: 1, name: 'Bryan' },
  { id: 2, name: 'Christian' },
  { id: 3, name: 'Jason' },
];

async function getAuthorById(authorId) {
  return authors.find((author) => author.id === authorId);
}
export default new Pool

