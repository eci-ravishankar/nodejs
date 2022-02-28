const router = require("express").Router();
const User = require("../modals/user");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const res = require("express/lib/response");
let userList =[
    {id:1, username:"A", email:"a@test.com", age:50, city:'Indore', password:'a@123'},
    {id:2, username:"B", email:"b@test.com", age:30, city:'Bhopal', password:'b@123'},
    {id:3, username:"C", email:"c@test.com", age:20, city:'Pune', password:'c@123'},
    {id:4, username:"C", email:"d@test.com", age:35, city:'Mumbai', password:'d@123'},
    {id:5, username:"E", email:"e@test.com", age:45, city:'Delhi', password:'e@123'},
]

router.get("/all",(req, res)=>{
    res.json(userList)
});

router.post("/login",(req, res)=>{
    const LoginUser = req.body.username;
    const password = req.body.password;
    const loginUser = userList.filter(user=> user.username === LoginUser && user.password === password );
    if(loginUser.length ==1) {
        res.status(201).json(loginUser[0])
    }else{
        res.status(401).json("Invalid credential...")
    }
    res.json(userList)
});

router.post('/register',(req,res)=>{
    let isUserExit = userList.find(user=>user.email == req.body.email);
    if(isUserExit){
        res.status(403).json(`Email ${req.body.email} already exiting`)
    }else{
        userList.push(req.body)
        res.status(201).json(req.body)
    }
});

router.delete("/:id",(req,res)=>{
    let isUserExit = userList.findIndex(itm=>itm.id == req.params.id);
    if(isUserExit > -1){
        userList.splice(isUserExit,1);
        res.status(201).json(userList)
    }else{
        res.status(403).json(`User id ${req.params.id} not exiting`)
    }
});

router.put("/:id",(req,res)=>{
    let isUserExit = userList.findIndex(itm=>itm.id == req.params.id);
    if(isUserExit > -1){
        userList.splice(isUserExit,1, req.body);
        res.status(201).json(userList)
    }else{
        res.status(403).json(`User id ${req.params.id} not exiting`)
    }
})


module.exports =router;