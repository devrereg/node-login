const passport = require('passport');
const local = require('./localStratege'); // 로컬서버로 로그인할때
const UserStorage = require('../models/UserStorage');

module.exports = () => {

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });


    passport.deserializeUser((id, done) => {

        try {
            const user = UserStorage.getUserInfoForId(id);
            if(user) {
                done(null, user)
            }
        } catch (err) {
            done(err)
        }
    });

    local();
};