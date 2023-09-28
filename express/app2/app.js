const express = require('express');//import module express
const path = require('path');//import module path; by using this module we send html file to clint side
const app = express();
app.get('/',(req,res)=>{
       res.sendFile(path.join(__dirname, "home.html"));
})


app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname, "contact.html"));
})

app.get('/service',(req,res)=>{
    res.sendFile(path.join(__dirname, "service.html"));
})

app.listen(3000);