const express= require("express");
const router = express.Router();
const userModel = require("../models/user");


router.post('/add',async(req,res)=>{
    const newUser = new userModel(req.body);
    await newUser.save();
    res.send("data Added")
})

router.get('/alluser',async(req,res)=>{
    const Users = await userModel.find();
    res.send(Users);
})

router.delete('/delete/:id', async(req,res)=>{
    const {id}=req.params;
    await userModel.deleteOne({_id:id});
    res.send("User delete");

})

router.put('/update/:id', async(req,res)=>{
    const {id} = req.params;
    console.log(id);
    await userModel.findByIdAndUpdate(id,{...req.body});
    res.send('user updated');


})

module.exports=router;