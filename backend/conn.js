const mongoose = require("mongoose");
const uri = "mongodb+srv://cluster0.crkyd.mongodb.net/newDB";

mongoose.connect(uri,{
  user:"sunil789",
  pass:"k5Wvc8hNiwLclTWs",
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>{
  console.log("connected Database");
}).catch((err)=>{
  console.log("Database error");
});