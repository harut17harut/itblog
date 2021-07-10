const express = require("express");
const router = express.Router();
const User = require("../models/user");
// router.get("/reg",(req,res)=>{
//     res.send("registration page");
// });
router.post('/reg',(req,res)=>{
var newUser = new User({
    name:req.body.name,
    email:req.body.email,
    login:req.body.login,
    password:req.body.password
});
User.addUser(newuser,(err,user)=>{
    if(err)
    res.json({success:false,msg:"user wasnt registered"});
    else
    res.json({success:true,msg:"youve registered succesfully"});
});
});
router.get("/auth",(req,res)=>{
    res.send("authoristion page");
});
router.get("/dashboard",(req,res)=>{
    res.send("dashboard page");
});
module.exports = router;