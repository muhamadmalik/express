import client from '../db/db.js';
await client.connect();

export async function getAllUsernames() {
  const { rows } = await client.query('SELECT * FROM usernames');
  console.log(rows);
  return rows;
}

export async function insertUsername(username) {
  await client.query('INSERT INTO usernames (username) VALUES ($1)', [
    username,
  ]);
}

const obj = { getAllUsernames, insertUsername };
export default obj;
