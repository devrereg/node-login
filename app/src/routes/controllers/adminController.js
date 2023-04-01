"use strict"


const logger = require("../../config/logger");


const output = {
    index:(req, res) => {
        logger.info(`GET / 200 "admin 화면으로 이동"`)
        res.render("admin/index")
    },
    profile:(req, res) => {
        logger.info(`GET / 200 "profile 화면으로 이동"`)


        res.render("admin/profile")
    },
    dashboard: (req, res) => {
        logger.info(`GET / 200 "admin/dashboard 화면으로 이동"`)
        res.render("admin/dashboard")
    },
    test: (req, res) => {
        logger.info(`GET / 200 "admin/test 화면으로 이동"`)
        res.render("admin/test")
    }
}



module.exports = {
    output,
    process
}