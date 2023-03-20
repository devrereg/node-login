const mysql = require("mysql");

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}

const db = mysql.createConnection(config);


db.connect();
module.exports = db;