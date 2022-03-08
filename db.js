const Pool = require('pg').Pool
require('dotenv').config()



const pool = new Pool({
  user: 'roote',
  host: 'localhost',
  database: process.env.DB_NAME,
  password:process.env.DB_PASSWORD,
  port: 5432,
});

module.exports =pool;