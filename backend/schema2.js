const mongoose = require('mongoose');
const user = mongoose.Schema({
    sender_name:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        minlength:[2,"min length should be 2"],
        maxlength:20
    },
    receiver_name:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        minlength:[2,"min length should be 2"],
        maxlength:20
    },
    time:{
        type:String,
        required:true,
        trim:true,
        minlength:1,
    },
    status:{
        type:String,
        required:true,
        trim:true,
        minlength:1,
        maxlength:8
    }
})
const newModel2 = mongoose.model("banker_histories",user);

module.exports = newModel2;