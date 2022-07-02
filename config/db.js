const Pool = require('pg').Pool



const pool = new Pool({
  user: 'roote',
  host: 'localhost',
  database: "db_MP1",
  password:"123root@",
  port: 5432,
});

module.exports =pool;