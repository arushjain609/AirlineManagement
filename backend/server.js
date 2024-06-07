// console.log("I am in express server");
const express =require("express");
const dotenv=require("dotenv").config();
const router = require("./routes/backendroutes"); 
const userRouter=require('./routes/userRoutes')
const checkRouter=require('./routes/checkroute')
const Air=require('./models/airpot.Model')
const errorHandler = require("./middlewares/errorhandler");
const connectDb = require("./configure/dbConnection");
const asyncHandler=require("express-async-handler");
const User=require('./models/user.Model')
const jwt=require('jsonwebtoken')
//connectDb();
connectDb();
const app=express();
const port=8080||process.env.PORT;

app.use(express.json());
app.use((req, res, next) => {
    const allowedOrigins = ['http://127.0.0.1:3000', 'http://localhost:3000', 'http://127.0.0.1:3001', 'http://localhost:3001'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
         res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
  });
app.use("/api/contacts",router);
app.use("/api/user",userRouter)
app.use((req,res,next)=>{
   // console.log(req.header("Authorization"))
    next()
})
app.get("/api/getall",asyncHandler(async(req,res,next)=>{
    const data=await Air.find({})
    res.status(200).send(data)
}))
app.post("/api/checkall",asyncHandler(async(req,res,next)=>{
    const {username,usermail}=req.body
    if(username){
    const data=await User.findOne({username:username})
    if(data){
        
        res.status(200).send({success:true}) }else{
            res.status(200).send({success:false})
        } }else{
        
        const data=await User.findOne({email:usermail})
        if(data){
        res.status(200).send({success:true}) }else{
            res.status(200).send({success:false})
        } 
    }
}))
app.use("/logged",checkRouter)
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});