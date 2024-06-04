const asyncHandler=require("express-async-handler");
const User=require("../models/user.Model")
const {hash,compare}=require('bcrypt')
const dotenv=require("dotenv").config();
const jwt=require('jsonwebtoken')
const createUser=asyncHandler(async(req,res)=>{
    const {username, email,password}=req.body;
    
    if(!username||!email||!password){
        res.status(400).send(
            {
                success:false,
                message:"All fields are mandatory"
            }
        );
        
    }
    
    const code=await hash(password,10)
    
    let user=new User({
        email:email,
        username : username,
        password : code
    
})
    const nuser=await user.save()
    const payload={
        username:username,
        id:nuser._id
       }
    
       const token = jwt.sign(payload,process.env.Secret,{expiresIn:"12h"})
       return res.status(200).send({
        success:true,
        message:"Logged in Succesfully",
        token:"Bearer "+token
    })
});
const checkUser=asyncHandler(async(req,res)=>{
       const {username,password}=req.body
       const user=await User.findOne({username:username})
       if(!user){
        return res.status(400).send({
            success:false,
            message:"User not found"
        })
       }
       ans=await compare(password,user.password)
       if(!ans){
            return res.status(401).send({
                success:false,
                message:"Incorrect Password"
            })
       }
       const payload={
        username:user.username,
        id:user._id
       }
       const token = jwt.sign(payload,process.env.Secret,{expiresIn:"12h"})
       return res.status(200).send({
        success:true,
        message:"Logged in Succesfully",
        token:"Bearer "+token
    })
})

module.exports={createUser,checkUser}