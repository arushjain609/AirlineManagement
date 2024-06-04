const asyncHandler=require("express-async-handler");
//automatic execute try catch block as middle ware for error handling
const jwt=require('jsonwebtoken')
const dotenv=require("dotenv").config();
//Importing Mongoose model
const User=require("../models/user.Model");
const checkUser=asyncHandler(async(req,res)=>{
    const token=req.header("Authorization")
    if(!token){
        return res.status(401).send({
            success:false,
            message:"Unauthorized"
        })
    }
    const jwtToken=token.replace("Bearer ","")
    
    const user=await jwt.verify(jwtToken,process.env.Secret)
    
    if(user){

        const userdb=await User.findOne({username:user.username})
        res.status(200).send({
            success:true,
            id:user._id,
            username:userdb.username
        })
    }

})
module.exports={checkUser}