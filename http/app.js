const http = require("http"); // return object variable
const fs = require('fs');//fs => full form file system {it's a building module}
const home = fs.readFileSync('home.html'); //asynchronous behavoius of javascript diffrence between readfile and redfilesync
const contact = fs.readFileSync('contact.html');
const service = fs.readFileSync('service.html');
const login = fs.readFileSync('login.html');
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.statusCode = 200;
    /*
    res.write("Hello World");
    res.write(`<h1>Hello world</h1>`);
    res.write(`<p>this is psit kanpur</p>`);

    res.write(home);*/
    if(req.url === '/'){ // we are performing routing here
        res.write(home);
    }// by === we compare value as well as return type
    else if(req.url === '/contact'){
        res.write(contact);
    }
    else if(req.url === '/service'){
        res.write(service);
    }
    else if(req.url === '/login'){
        res.write(login);
    }




    if((req.url === '/login') && req.method === 'POST'){
        //console.log('hello');
        const body = [];
        req.on('data',(data)=>{
            body.push(data);

        })
        req.on('end',()=>{
            //console.log(body);
            const reqbody = Buffer.concat(body).toString();
            console.log(reqbody);
            fs.writeFileSync('data.txt',reqbody);
        })

    }




















    res.end();
}) // calling a anonimous function

server.listen(3000);