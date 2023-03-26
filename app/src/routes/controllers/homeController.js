"use strict"


const logger = require("../../config/logger");


const output = {
    home: (req, res) => {
        logger.info(`GET / 200 "홈 화면으로 이동"`)
        res.render("home/index",{'layout': false})
    },
}



module.exports = {
    output,
    process
}