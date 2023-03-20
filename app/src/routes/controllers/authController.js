"use strict"


const logger = require("../../config/logger");
const User = require("../../models/User");
const passport = require("passport");


const output = {
    login: (req, res) => {
        logger.info(`GET /login 200 "로그인 화면으로 이동"`)
        res.render("auth/login")
    },
    register: (req, res) => {
        logger.info(`GET /register 200 "회원가입 화면으로 이동"`)
        res.render("auth/register")
    },
}

const process = {
    login: async (req, res) => {
        passport.authenticate('local', (authError, user, info) => {
            let response;

            if (authError) {
                response = {success: false, msg: authError}
                return res.json(response);
            }
            if (!user) {
                response = {success: false, msg: "가입된 유저가 아닙니다."}
                return res.json(response);
            }


            return req.login(user, loginError => {
                if (loginError) {
                    response = {success: false, msg: loginError}
                    return res.json(response)
                }
                response = {success: true};
                return res.json(response);

            });
        })(req, res);

    },

    logout: async (req, res) => {
        req.logout();
        req.session.destroy();
        res.redirect('/');
    },

    register: async (req, res) => {

        const user = new User(req.body);
        const response = await user.register();

        return res.json(response);
    }
}


module.exports = {
    output,
    process
}