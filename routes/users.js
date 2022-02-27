const express = require('express');
const router = express.Router();
const verifyToken = require("./verify");
const cryptoJS = require("crypto-js");
const User = require('../modals/user');

//REGISTER USER
router.post("/register", async (req, res)=>{
    const userData = new User({
        username:req.body.username,
        email : req.body.email,
        password: cryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
        isAdmin: req.body.isAdmin,
        profilePic: req.body.profilePic
    });
    try {
        const user = await userData.save();
        const {password, ...otherDetails} = user._doc;
        res.status(201).json(otherDetails);
    } catch (error) {
        res.status(500).json(error);
    }
});



//Get all users
router.get("/user-list", verifyToken, async(req, res)=>{
    console.log("starting", req.body)
    try {
        console.log("before")
        const updateUser = await User.find({}).sort({createdAt: 1});
        console.log("after")
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(401).json(error);
    }
});


//update user
router.put("/:id", verifyToken, async(req, res)=>{
    if(req.user.id === req.params.id){
        if(req.body.password){
            req.body.password = cryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
        };
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true});
            res.status(200).json(updateUser);
        } catch (error) {
            res.status(401).json(error);
        }
    }else{
        res.status(401).json("You can not changes other user's data")
    }
});

//Delete user
router.delete("/:id", verifyToken, async(req, res)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user deleted successfully...");
    } catch (error) {
        res.status(401).json(error);
    }
});

//Find single user
router.get("/find/:id", verifyToken, async(req, res)=>{
    try {
        const user = await User.find({_id: req.params.id});
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json(error);
    }
});



module.exports = router;