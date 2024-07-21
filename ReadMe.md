<!-- NodeJs Using expressJs Framework -->

Request --> 1st-MiddleWare ---> 2nd-Middleware --> Response

1st-Middleware -> (req, res, next)=>{    next() }
2nd-Middleware -> (req, res, next)=>{   res.send}


<!-- Routes -->
<!-- import expresJs from express -->

const variableName = require('express')

const route = variableName.Route()

<!-- Set up all the middlware  -->
/* this is demo*/

app.use(()=>{

}) 

/* route.use/get/post control  */

route.use('/',(req, res , next)=>{
    res.send(file.html)
    OR
    res.redirect('/location')
})

module.export = route;

<!-- app.js (root file) -->
const variabe1 = require('./location of the route component')
const variabe2 = require('./location of the route component')

/*USE*/

app.use(variable1)
app.use(variable2)



