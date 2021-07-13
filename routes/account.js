const express = require("express");
const router = express.Router();
const User = require("../models/user");
var jwt = require('jsonwebtoken');
const passport = require("passport");
module.exports = router;
const config = require("../config/db");

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
User.addUser(newUser,(err,user)=>{
    if(err)
    res.json({success:false,msg:"user wasnt registered"});
    else
    res.json({success:true,msg:"youve registered succesfully"});
});
});
router.post("/auth",(req,res)=>{
    const login = req.body.login;
    const password = req.body.password;
    User.getUserByLogin(login,(err,user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success:false,msg:"user not found"});
        } else{
        User.comparePass(password,user.password,(err,ismatch)=>{
            if(err) throw err;
            if(ismatch){
                console.log("passwords are matching");
                const token = jwt.sign(user.toJSON(),config.secret,{
                    expiresIn:3600*24
                });
                res.json({
                    success:true,
                    token:'JWT ' + token,
                    user:{
                        id:user._id,
                        name:user.name,
                        login:user.login,
                        email:user.email

                    }
                });
            }else{
                return res.json({success:false,msg:"wrong password"});
            }
        });
    }
    });
});
router.get("/dashboard",passport.authenticate('jwt',{session:false}),(req,res)=>{
    res.send("dashboard page");
});
