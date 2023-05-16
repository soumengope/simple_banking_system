const mongoose = require('mongoose');
const user = mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        minlength:[2,"min length should be 2"],
        maxlength:20
    },
    bank:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        minlength:[2,'min length should be 2'],
        maxlength:10
    },
    acNo:{
        type:Number,
        required:true,
        trim:true,
        minlength:[11,"min length should be 11"],
        maxlength:11
    },
    balance:{
        type:Number,
        required:true,
        trim:true,
        minlength:1,
        maxlength:8
    }
})
const newModel = mongoose.model("mydbs",user);
// const data = async ()=>{
//     const result = await newModel.insertMany([
// {name:'peter mckinnon',bank:'rbc',acNo:80160000008,balance:87000}
// ]);
//     console.log(result);
// }
module.exports = newModel;