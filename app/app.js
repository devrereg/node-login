"use strict"
// 모듈
const express = require('express');
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

// 로그인 세션
const session = require('express-session');
const passport = require('passport');
const passportConfig = require('./src/passport');
const router = require("./src/routes");


const app = express();
passportConfig(); // 패스포트 설정



// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`))
app.use(bodyParser.json());
// url을 통해 전달되는 데이터에 한글, 공백,등과 같은 문자가 포함될 경우 제대로 인식되지않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(session({
    secret: process.env.PASSPORT_SCRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
    },
}));
app.use(passport.initialize());
app.use(passport.session());



// 라우팅
app.use("/", router)// 미들웨어를 등록해주는 메서드


module.exports = app;
