const router = require("express").Router();
const User = require("../modals/user");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const res = require("express/lib/response");

router.get("/",(req, rest)=>{
    res.json("TEsting here....")
});

module.exports =router;