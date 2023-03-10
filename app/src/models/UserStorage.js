"use strict"

class UserStorage {
    static #users = {
        id: ["andrew"],
        password:["111111"],
        name: ["앤드류"]
    }

    static getUsers(...fields) {
        console.log(fields);
        const users = this.#users
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
            },{})

        return newUsers;
    }
}

module.exports = UserStorage;