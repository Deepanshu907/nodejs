const express = require('express');
const app = express();
const userModel = require('./model.js');


app.get('/',(req,res)=>{
  res.end("this is home page");
})

app.get('/create',(req,res)=>{
    userModel.create({
        name:"deepanshu",
        email:"deepanshujindal190@gmail.com",
        password:"123456"
    })
})



app.listen(8000,()=>{
    console.log("server started");
})