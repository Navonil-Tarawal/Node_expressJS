const express = require('express')

const shop = express.Router();

shop.get('/',(req, res, next)=>{ 
    console.log('hello express server 2.0');
    res.send('<h1> Hello From Express </h1>')
    
}); 
 
module.exports = shop;