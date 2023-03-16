"use strict"

const db = require("../config/db");

class UserStorage {
    static getUserInfo(email) {
        return new Promise((resolve, reject) => {
            const query= "SELECT * FROM users WHERE email = ?;";
            db.query(query, [email], (err, data) => {
                if(err) reject(`${err}`);
                else resolve(data[0]);
            })
        })
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(email, name, password) VALUES (?,?,?);";
            db.query(query, [userInfo.email, userInfo.name, userInfo.password], (err) => {
                if(err) reject(`${err}`);
                else resolve({success: true})
            })
        })
    }
}

module.exports = UserStorage;