const express = require('express');//import module express
const path = require('path');//import module path; by using this module we send html file to clint side
const app = express();



//middle ware

app.use(express.static(path.join(__dirname,'public')));

//route
/*

// as we declared entry point as index.html .. we do not require this routing from now
app.get('/',(req,res)=>{
       res.sendFile(path.join(__dirname, "index.html"));
})*/


app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname, "public/contact.html"));
})

app.get('/service',(req,res)=>{
    res.sendFile(path.join(__dirname, "public/service.html"));
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname, "public/login.html"));
})

app.listen(3000);