const express = require('express');

 const router = express.Router();


 router.get('/add-product',(req, res, next)=>{
    res.send('<form action="/product" method="POST"> <input type="text" name="title"> <Button type="submit">Add Product</Button>  </input>  </form>');
    next()

})

router.post('/product',(req,res, next)=>{
    // res.send('<h1>your product submited</h1>')
    console.log(req.body);
    res.redirect('/')
})

module.exports = router;

