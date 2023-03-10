"use strict"


const UserStorage = require("./UserStorage");
class User {
    constructor(body) {
        this.body = body;
    }


    async login() {
        const client = this.body
        try {
            const {email, password} = await UserStorage.getUserInfo(client.email);

            if(email) {
                if (email === client.email && password === client.password) {
                    return {success: true}
                }
                return {success: false, msg: "비밀번호가 틀렸습니다."}
            }
            return {success: false, msg: "존재하지 않는 email 입니다."}
        } catch(err) {
            return {success: false, msg: err}
        }
    }

    async register(req, res) {
        const client = this.body
        const response = await UserStorage.save(client);

        return response
    }
}

module.exports = User;