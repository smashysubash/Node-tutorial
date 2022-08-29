const express = require('express');

const leaderRouter = express.Router();

leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Hii hello from leaders');
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('PUT operation not supported ');
})
.post((req,res,next)=>{
    res.end('Add dishes!!! '+ req.body.name +
    ' with details: ' +req.body.description);})
.delete((req,res,next)=>{
    res.end('Deleting all contents ');
})


leaderRouter.route('/:leaderid')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
        res.end('Hi hello from leaders, leader:  '+req.params.leaderid);
})
.post((req,res,next)=>{
    res.statuscode=403;
    res.end('POST operation not supported '+req.params.leaderid);
})
.put((req,res,next)=>{
    res.write('PUT operation update the content for '+req.params.leaderid);
    res.end(req.body.name +' details '+req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting the content: '+req.params.leaderid);
});

module.exports = leaderRouter;