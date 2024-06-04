//@ get all contacts
//@route get/api/contacts
//@access public
const asyncHandler=require("express-async-handler");
//automatic execute try catch block as middle ware for error handling

//Importing Mongoose model
const User=require("../models/user.Model");
const Users=User.find();


const getUsers=asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Get all contacts"});
});
//@create contact

//@ modify contact
const getUser=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Get contact for ${req.params.id}`});
});
//update contact
const updateUser=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Update contacts ${req.params.id}`});
});
//delete contact
const deleteUser=async(req,res)=>{
    res.status(200).json({message:`Delete contacts for ${req.params.id}`});
}

 
module.exports={getUsers,getUser,updateUser,deleteUser};