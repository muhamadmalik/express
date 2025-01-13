import pg from 'pg';
const { Pool, Client } = pg;

const client = new Client({
  user: 'postgres',
  database: 'top_users',
  host: 'localhost',
  password: 'mysecretpassword',
  port: 5432,
});

// await client.connect()


// const { rows } = await client.query('SELECT * FROM usernames');
// console.log(rows);



export default client;
