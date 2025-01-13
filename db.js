import pg from 'pg';
const { Pool, Client } = pg;
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  password: 'mysecretpassword', 
  port: 5432,
});

async function createDatabase() {
  try {
    await client.connect(); 

    const existsRes = await client.query(
      "SELECT 1 FROM pg_database WHERE datname = 'mydatabase2'"
    );

    if (existsRes.rows.length === 0) {
      await client.query('CREATE DATABASE mydatabase2');
      console.log('Database "mydatabase" created successfully.');
    } else {
      console.log('Database "mydatabase" already exists.');
    }
  } catch (err) {
    console.error('Error creating database:', err);
  } finally {
    await client.end(); 
  }
}

createDatabase();

const authors = [
  { id: 1, name: 'Bryan' },
  { id: 2, name: 'Christian' },
  { id: 3, name: 'Jason' },
];

async function getAuthorById(authorId) {
  return authors.find((author) => author.id === authorId);
}

export default authors;
