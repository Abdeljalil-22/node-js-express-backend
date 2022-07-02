const router = require("express").Router();
//const { status } = require("express/lib/response");
const {login} =require("../Controllers/Auth")
const jwt = require("jsonwebtoken");
require('dotenv').config()



router.post("/login",login);






module.exports = router; 