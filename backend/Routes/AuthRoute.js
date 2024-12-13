const express=require('express');
const controller=require('../Controller/Controller.js');
const router=express.Router();


router.post("/login",controller.loginPage);

router.post("/register",controller.registerPage);

router.get("/removecookies",controller.removeCookies);

module.exports=router;