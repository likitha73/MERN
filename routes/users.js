//routes/users.js
const express= require('express')
const router = express.Router()
const User = require('../model/userSchema');

//REST API POST METHOD TO HANDLE POST REQUEST
router.post('/',(req,res)=>{
    try{
    const {name,email,password}=req.body;
    const userQuery = new User({name,email,password});
   // we can save it to the database
    userQuery.save()
    res.status(201).send({message:"User Created"});
    }catch(err){
        res.status(500).send({message:err})
    }
})

router.get('/',(req,res)=>{
    try{
        res.status(201).send(User.find());
    }catch(err){
        res.status(500).send({message:err})
    }
})
module.exports=router;