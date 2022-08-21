const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req,res)=>{
    console.log("Request for "+req.url+" by method "+req.method);;

    if(req.method=='GET'){
        var fileurl;
        if(req.url=='/') fileurl = '/index.html';
        else fileurl = req.url;

        var filePath = path.resolve('./public'+fileurl);
        const fileExt = path.extname(filePath);
        // console.log("file path "+filePath);
        if(fileExt=='.html'){
            fs.exists(filePath, (exists)=>{
                if(!exists){
                    res.statusCode=404;
                    res.setHeader('Content-Type','Text/html');
                    res.end('<h1>Error 404 '+fileurl+" not found</h1>");
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type','Text/html');
                fs.createReadStream(filePath).pipe(res);
            })
        }else{
            res.statusCode=404;
            res.setHeader('Content-Type','Text/html');
            res.end('<h1>Error 404 '+fileurl+" not found</h1>");
            return;
        }
    }else{
        res.statusCode=404;
        res.setHeader('Content-Type','Text/html');
        res.end('<h1>Error 404 '+req.method+" not supported</h1>");
        return;
    }
})

server.listen(port, hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
})