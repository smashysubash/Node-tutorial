const express = require('express');

const promotionsRouter = express.Router();

promotionsRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Hii hello from promotions');
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('PUT operation not supported ');
})
.post((req,res,next)=>{
    res.end('Add promotions!!! '+ req.body.name +
    ' with details: ' +req.body.description);})
.delete((req,res,next)=>{
    res.end('Deleting all contents ');
})


promotionsRouter.route('/:promoid')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
        res.end('Hi hello from promotions, promotion:  '+req.params.promoid);
})
.post((req,res,next)=>{
    res.statuscode=403;
    res.end('POST operation not supported '+req.params.promoid);
})
.put((req,res,next)=>{
    res.write('PUT operation update the content for '+req.params.promoid);
    res.end(req.body.name +' details '+req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting the content: '+req.params.promoid);
});

module.exports = promotionsRouter;