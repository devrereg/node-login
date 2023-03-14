const mysql = require("mysql");

const db = mysql.createConnection({
    host: "prelencer.cktgdikukvou.ap-northeast-2.rds.amazonaws.com",
    user:"admin",
    password:"fbquddhrcjswo",
    database: "prelencer"
});


db.connect();

module.exports = db;