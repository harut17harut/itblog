const express = require("express");
const router = express.Router();
router.get("/reg",(req,res)=>{
    res.send("registration page");
});

router.get("/auth",(req,res)=>{
    res.send("authoristion page");
});
router.get("/dashboard",(req,res)=>{
    res.send("dashboard page");
});
module.exports = router;