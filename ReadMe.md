NodeJs Using expressJs Framework

Request --> 1st-MiddleWare ---> 2nd-Middleware --> Response

1st-Middleware -> (req, res, next)=>{    next() }

2nd-Middleware -> (req, res, next)=>{   res.send}