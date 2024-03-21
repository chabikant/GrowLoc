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
    // console.log(id);
    const client = await userModel.findById(id);
    // console.log(client);
    return res.send(client);
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