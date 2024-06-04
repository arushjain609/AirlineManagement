const express =require("express");
const{checkUser}=require("../controllers/checker");
const User=require('../models/user.Model')
const asyncHandler=require("express-async-handler");
const router=express.Router();
router.route("/").get(checkUser)
module.exports=router;