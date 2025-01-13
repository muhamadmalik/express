// #! /usr/bin/env node
import pg from 'pg';
const { Client } = pg;

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username)
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
  console.log('seeding...');

  const client = new Client({
    user: 'postgres',
    database: 'top_users',
    host: 'localhost',
    password: 'mysecretpassword',
    port: 5432,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();

const authors = [
  { id: 1, name: 'Bryan' },
  { id: 2, name: 'Christian' },
  { id: 3, name: 'Jason' },
];

async function getAuthorById(authorId) {
  return authors.find((author) => author.id === authorId);
}

export default authors;