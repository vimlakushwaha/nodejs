const express = require('express');//import module express
const path = require('path');//import module path; by using this module we send html file to clint side
const bodyparser = require('body-parser');
const app = express();



//middle ware

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyparser.urlencoded({extended:false}));

app.use(require(path.join(__dirname,'routes.js')));


app.listen(3000);