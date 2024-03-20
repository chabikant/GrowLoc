const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes=require('./routes/user');


const url = "mongodb+srv://chabikant_org:sNfLOlYkmp8HlRiN@cluster0.h1kjjk6.mongodb.net/Growdb"


const ConnectionParams={
    useNewUrlParser:true,
    useUnifiedTopology: true,
}
mongoose.connect(url,ConnectionParams).then(()=>{
    console.log("conntected to DB")
}).catch(()=>{
    console.log("Error!!")
})


app.use(express.urlencoded({extented:true}));
app.use(express.json());

app.use('/user',userRoutes );


app.all('*',(req,res)=>{
    res.send('<h1>404 Not Found!!!</h1>')
})

app.listen(5000,()=>{
    console.log("Server is up");
})
