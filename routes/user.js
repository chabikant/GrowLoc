const express= require("express");
const router = express.Router();
const userModel = require("../models/user");

// creating the new user 
router.post('/add',async(req,res)=>{
    const newUser = new userModel(req.body);
    await newUser.save();
    res.send("data Added")
})

// get a user by id 
router.get('/:id',async(req,res)=>{
    const {id} = req.params;
    const client = await userModel.findById(id);
    return res.send(client);
})

// get all user 
router.get('/alluser',async(req,res)=>{
    const Users = await userModel.find();
    res.send(Users);
})

// delete the user by id 
router.delete('/delete/:id', async(req,res)=>{
    const {id}=req.params;
    await userModel.deleteOne({_id:id});
    res.send("User delete");

})

// update the user by id 
router.put('/update/:id', async(req,res)=>{
    const {id} = req.params;
    console.log(id);
    await userModel.findByIdAndUpdate(id,{...req.body});
    res.send('user updated');


})

module.exports=router;