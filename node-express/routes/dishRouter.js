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
    res.end('Add something!!! '+ req.body.name +
    ' with details: ' +req.body.description);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('PUT operation not seperated ');
})
.delete((req,res,next)=>{
    res.end('Deleting all contents ');
});

module.exports = dishRouter;

// app.get('/dishes/:dishid',(req,res,next)=>{
//     res.end('Hi hello from dishes '+req.params.dishid);
// });

// app.post('/dishes/:dishid',(req,res,next)=>{
//     res.statuscode=403;
//     res.end('POST operation not seperated '+req.params.dishid);
// });

// app.put('/dishes/:dishid',(req,res,next)=>{
//     res.write('PUT operation update the content for '+req.params.dishid);
//     res.end(req.body.name +' details '+req.body.description);
// });

// app.delete('/dishes/:dishid',(req,res,next)=>{
//     res.end('Deleting the contents: '+req.params.dishid);
// });
