/* ExpressJS  */

const http = require('http')

const express = require('express'); 
const app = express();

app.use((req, res, next)=>{ 
    console.log('hello express server');
    next(); //allows the request to continue to the next middleware in line
 }); 

app.use((req, res, next)=>{ 
    console.log('hello express server 2.0');
    res.send('<h1> Hello From Express </h1>')
    
}); 
const server = http.createServer(app)

server.listen(3300);
