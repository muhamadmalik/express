import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// pool.query(`CREATE DATABASE auth`)
// await pool.query(`CREATE TABLE users (id SERIAL PRIMARY KEY, username VARCHAR(255), password VARCHAR(255))`)
const users =  await pool.query(`SELECT * FROM users`)
console.log(users.rows)

const query = (query, params) => pool.query(query, params);
export default query;
