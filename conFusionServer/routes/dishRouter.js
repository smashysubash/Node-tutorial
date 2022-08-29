const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Hi hello from dishes');
})
.post((req,res,next)=>{
    res.end('Add dishes!!! '+ req.body.name +
    ' with details: ' +req.body.description);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('PUT operation not supported ');
})
.delete((req,res,next)=>{
    res.end('Deleting all contents ');
});

dishRouter.route('/:dishid')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
        res.end('Hi hello from dishes, dish:  '+req.params.dishid);
})
.post((req,res,next)=>{
    res.statuscode=403;
    res.end('POST operation not supported '+req.params.dishid);
})
.put((req,res,next)=>{
    res.write('PUT operation update the content for '+req.params.dishid);
    res.end(req.body.name +' details '+req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting the content: '+req.params.dishid);
});

module.exports = dishRouter;