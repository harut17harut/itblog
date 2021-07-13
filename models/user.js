const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/db');

//user data scheme
const UserSchema = mongoose.Schema({
name:{
    type:String
},
email:{
type:String,
required:true
},
login:{
    type:String,
    required:true
    },
password:{
    type:String,
    required:true
}
});
const User = module.exports = mongoose.model('User',UserSchema);
//get user by login
module.exports.getUserByLogin = function(login,callback){
    const query = {login:login};
    User.findOne(query,callback);
};
module.exports.getUserById = function(id,callback){
    User.findById(id,callback);
};
module.exports.addUser = function(newUser,callback){
    newUser.password
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
   
   
};
module.exports.comparePass = function(password,userDBPass,callback){
bcrypt.compare(password,userDBPass,(err,ismatch)=>{
if(err)throw err;
callback(null,ismatch);
});
};