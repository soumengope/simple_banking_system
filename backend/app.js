const express = require('express');
require('dotenv').config();
const path = require("path");
const cookieParser = require("cookie-parser")

const conn = require('./conn.js');
const newModel = require('./schema.js');
const newModel2 = require('./schema2.js');


const app = express();
const port = process.env.PORT || 8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const cors = require("cors");
const { default: mongoose } = require('mongoose');
app.use(cors())
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send("homepage")
})

app.get('/data',(req,res)=>{
    const data = async()=>{
        const result = await newModel.find({});
        res.status(200).json(result)
    }
    data()
})
app.get('/history_data',(req,res)=>{
    const data = async()=>{
        const result = await newModel2.find({});
        res.status(200).json(result)
    }
    data()
})

app.post('/login',(req,res)=>{
    const name = req.body.name;
    const pass = req.body.pass;
    const data = async()=>{
        const result = await newModel.findOne({name:name,acNo:pass})
        if(result !== null){
            res.status(200).json({message:'successfully login', id:result._id,
            name:result.name, acNo:result.acNo})
        }else{
            res.status(200).json({message:'data not found'})
        }
    }
    data()
})

app.post('/transaction',(req,res)=>{
    const profile = req.body.profile;
    const names = req.body.names;
    const money = req.body.money;

    if(profile !== undefined){
        if(names !=='default' && money.trim() !==''){
            const data = async ()=>{
                const receiver = await newModel.findOne({name:names});
                const sender = await newModel.findOne({name:profile});
                if(sender.balance > money){
                    const client_bal = await newModel.updateOne({name:names},{$set :{balance:(parseInt(receiver.balance) + parseInt(money))}})
                    const my_bal = await newModel.updateOne({name:profile},{$set :{balance:(parseInt(sender.balance) - parseInt(money))}})
                    let dat = new Date()
                    let year = dat.getFullYear()
                    let mon = dat.getMonth()
                    let day = dat.getDate()
                    let hour = dat.getHours()
                    let minute = dat.getMinutes()
                    let fullDate = year+'-'+(mon+1)+'-'+day+' || '+hour+':'+minute;
                    const result = await newModel2.insertMany([
                    {sender_name:profile,receiver_name:names,time:fullDate,status:money}
                    ])
                    res.status(200).json({message:'successfully send the money',receiver:names})
                }else{
                    res.status(200).json({message:'you dont have enough balance'})
                }
                
            }
            data()
        }else{
            res.status(200).json({message:'both field shouldn not be empty'})
        }
    }else{
        res.status(200).json({message:'we dont know who are you ,please login first'})
    }
    
})


app.listen(port,()=>{
    try{
        console.log(`server running on ${port}`)
    }catch(err){
        console.log(err)
    }
})