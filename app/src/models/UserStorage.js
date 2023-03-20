"use strict"

const db = require("../config/db");
const bcrypt = require("bcrypt");

class UserStorage {
    static getUserInfo(email) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE email = ?;";
            db.query(query, [email], (err, data) => {
                if (err) reject(`${err}`);
                else resolve(data[0]);
            })
        })
    }

    static getUserInfoForId(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                else resolve(data[0]);
            })
        })
    }

    static async save(userInfo) {
        return new Promise(async (resolve, reject) => {
            const user = await this.getUserInfo(userInfo.email);

            if (user) {
                resolve({success: false, msg: "이미 가입된 이메일 입니다."});
                return;
            }
            let hashPW = await bcrypt.hash(userInfo.password, 12);

            db.query('INSERT INTO users (email, name, password, hashed_password) VALUES (?, ?, ?, ?)', [
                userInfo.email,
                userInfo.name,
                userInfo.password,
                hashPW
            ], function (err) {
                if (err) {
                    return reject(err);
                } else resolve({success: true})
            });

        })
    }
}

module.exports = UserStorage;