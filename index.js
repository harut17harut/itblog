const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const config = require("./config/db");
const account = require('./routes/account');

//connect to db
mongoose.connect(config.db,{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on('connected',()=>{
    console.log("connection success");
});

mongoose.connection.on('error', (err)=>{
    console.log("connection failed: "  + err);
});

//connection end
const app = express();
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
const port = 3000;

app.use(cors());//external links
app.use(bodyParser.json());//for post requests

//url listens
app.use("/account",account);
app.use(express.static(path.join(__dirname + "public")));//connect server to public dir
app.get("/",(req,res)=>{
    res.send("okay");
});
app.listen(port,() => {
    console.log("server was started in port " + port);
});
