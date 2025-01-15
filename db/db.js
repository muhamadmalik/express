import pg from 'pg';
import 'dotenv/config'

const {  Client } = pg;
const client = new Client({
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
})
const clientt = new Client({
  user: 'postgres',
  database: 'top_users',
  host: 'localhost',
  password: 'mysecretpassword',
  port: 5432,
});

export default client