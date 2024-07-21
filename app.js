/* ExpressJS  */

const http = require('http')

const express = require('express'); 
const app = express();

const adminRoute = require('./routes/admin.js') 
const shopRoute = require('./routes/shop')

const bodyParser = require('body-parser') ;


// app.use((req, res, next)=>{ 
//     console.log('hello express server');
//     next(); //allows the request to continue to the next middleware in line
//  }); 

app.use(bodyParser.urlencoded({extended: false}) ) 
 

app.use(adminRoute)
app.use(shopRoute) 

const server = http.createServer(app)

server.listen(3300);

