const express  = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['http://localhost:3000', 'https://localhost:3443'];
var corsOptionsDelegate = (req, callback)=>{
    console.log(req.header('Origin'));

    if(whitelist.indexOf(req.header('Origin'))!== -1){
        callback(null, true); 
    }else{
        callback(null, false); 
    }
}

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);