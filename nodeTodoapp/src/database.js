const mysql = require("mysql2");
require("dotenv").config();

let conn = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_DBNAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
});

module.exports = conn;