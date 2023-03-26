"use strict"
const express =require("express");
const router = express.Router();


//  미들웨어
const { isLoggedIn, isNotLoggedIn } = require('./middleware/auth');
// 컨트롤러
const homeController = require("./controllers/homeController");
const authController = require("./controllers/authController");
const adminController = require("./controllers/adminController");

/*
    homeController
 */
router.get('/', homeController.output.home);


/*
    authController
 */
router.get('/auth/login',isNotLoggedIn, authController.output.login);
router.get('/auth/register',isNotLoggedIn, authController.output.register);

router.post('/auth/login',isNotLoggedIn,authController.process.login);
router.post('/auth/logout',isLoggedIn,authController.process.logout);
router.post('/auth/register',isNotLoggedIn,authController.process.register);


/*
    adminController
 */
router.get('/admin',isLoggedIn, adminController.output.index);
router.get('/admin/profile',isLoggedIn, adminController.output.index);
router.get('/admin/dashboard',isLoggedIn, adminController.output.dashboard);
router.get('/admin/test',isLoggedIn, adminController.output.test);





module.exports = router;