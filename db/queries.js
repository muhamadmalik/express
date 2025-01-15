import client from '../db/db.js';
await client.connect();

export async function getAllUsernames() {
  const { rows } = await client.query('SELECT * FROM usernames');
  //   console.log(rows);
  return rows;
}

export async function insertUsername(username) {
  await client.query('INSERT INTO usernames (username) VALUES ($1)', [
    username,
  ]);
}
export async function searchUsername(username) {
  const { rows } = await client.query(
    `SELECT * FROM usernames WHERE username = '${username}'`
  );
  return rows;
}
export async function deleteUsername(id) {
  await client.query(`DELETE FROM usernames WHERE id = ${id}`);
}

const obj = { getAllUsernames, insertUsername };
export default obj;
