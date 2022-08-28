const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/smashy',(req,res,next)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/plain');
    next();
});

app.get('/smashy',(req,res,next)=>{
    res.end('Hi hello from SMASHY');
});

app.post('/smashy',(req,res,next)=>{
    res.end('Add something!!! '+ req.body.name +
    ' with details: ' +req.body.description);
});

app.put('/smashy',(req,res,next)=>{
    res.statuscode=403;
    res.end('PUT operation not seperated ');
});

app.delete('/smashy',(req,res,next)=>{
    res.end('Deleting all contents ');
});


app.get('/smashy/:getId',(req,res,next)=>{
    res.end('Hi hello from SMASHY '+req.params.getId);
});

app.post('/smashy/:getId',(req,res,next)=>{
    res.statuscode=403;
    res.end('POST operation not seperated '+req.params.getId);
});

app.put('/smashy/:getId',(req,res,next)=>{
    res.write('PUT operation update the content for '+req.params.getId);
    res.end(req.body.name +' details '+req.body.description);
});

app.delete('/smashy/:getId',(req,res,next)=>{
    res.end('Deleting the contents: '+req.params.getId);
});


app.use(express.static(__dirname + '/public'));

app.use((req, res, next)=>{
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1>hiii</h1>');
});

const server = http.createServer(app);



server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})