// db.js - MySQL connection pool
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASSWORD || 'YOUR_MYSQL_PASSWORD',
    database: 'gqldemo',
    waitForConnections: true,
    connectionLimit: 10
});

module.exports = pool;
