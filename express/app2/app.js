const express = require('express');//import module express
const path = require('path');//import module path; by using this module we send html file to clint side
const bodyparser = require('body-parser');
const app = express();



//middle ware

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyparser.urlencoded({extended:false}));
//app.inbuild(express);

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

app.post('/login',(req,res)=>{
    console.log(req.body);
})

app.listen(3000);