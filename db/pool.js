import pg from 'pg';
const { Pool, Client } = pg;
 new Pool({
    host: "localhost",
    user: "<role_name>",
    database: "top_users",
    password: "<role_password>",
    port: 5432 
  });



export default new Pool

