const router = require("express").Router();
const User = require("../modals/user");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//LOGIN USER
router.post("/login", async(req, res)=>{
    try {
        const payload = {email: req.body.email}
        const user = await User.findOne(payload);
        !user && res.status(501).json("Invalid user credentials...");

        const userPass = cryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = userPass.toString(cryptoJS.enc.Utf8);
        originalPassword !== req.body.password && res.status(501).json("Invalid user credentials...");
        const accessToken = jwt.sign(
            {id: user._id, admin: user.isAdmin},
            process.env.SECRET_KEY,
            {expiresIn:"5d"}
            )
        const {password, ...otherDetails} = user._doc;
        res.status(201).json({...otherDetails, accessToken});
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;