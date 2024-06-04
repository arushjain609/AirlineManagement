const express =require ("express");
const router=express.Router();
const{getUsers,getUser,updateUser,deleteUser}=require("../controllers/controller");

router.route("/").get(getUsers);

router.route("/:id").put(updateUser).get(getUser).delete(deleteUser);
module.exports=router;