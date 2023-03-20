const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const UserStorage = require("../models/UserStorage")

module.exports = () => {
    passport.use(
        new LocalStrategy(
            {
                usernameField: 'email', // req.body.email
                passwordField: 'password', // req.body.password
                session: true, // 세션에 저장 여부
            },
            async (email, password, done) => {
                try {
                    const exUser = await UserStorage.getUserInfo(email);

                    if (exUser) {

                        const result = await bcrypt.compare(password, exUser.hashed_password);
                        if (result) {
                            done(null, exUser);
                        } else {
                            done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
                        }
                    }
                    else {
                        done(null, false, { message: '가입되지 않은 회원입니다.' });
                    }
                } catch (error) {
                    console.error(error);
                    done(error);
                }
            },
        ),
    );
};