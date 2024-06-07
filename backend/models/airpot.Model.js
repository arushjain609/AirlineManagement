const mongoose =require("mongoose");
const userSchema=new mongoose.Schema({
    
    name:String,
    location:String

})
module.exports=mongoose.model("AirportID",userSchema);