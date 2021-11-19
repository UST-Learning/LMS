const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const lms_user = mongoose.Schema({
    user_name:{
        type:String
    },
    user_email:{
        type:String
    },
    user_address:{
        type:String
    },
    user_type:{
        type:String
    },
    user_status:{
        type:String
    },
    user_login_id:{
        type:String
    },
    user_password:{
        type:String
    }
    
}, {timestamp: true})

const user = mongoose.model('user',lms_user)
module.exports= user;
