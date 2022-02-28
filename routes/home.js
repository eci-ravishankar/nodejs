const router = require("express").Router();
const User = require("../modals/user");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const res = require("express/lib/response");

router.get("/",(req, res)=>{
    res.json([
        {id:1, name:"A", age:50, city:'Indore'},
        {id:2, name:"B", age:50, city:'Indore'},
        {id:3, name:"C", age:50, city:'Indore'},
        {id:4, name:"C", age:50, city:'Indore'},
        {id:5, name:"E", age:50, city:'Indore'},
    ])
});

module.exports =router;