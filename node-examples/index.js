var rect = require('./rectangle');

function solveRect(l,b){
    rect(l,b,(err, rectangle)=>{
        if(err){
            console.log("Error: ",err.message);
        }else{
            console.log("The area is "+rectangle.area());
            console.log("The perimeter is "+rectangle.perimeter());
        }
    });
    console.groupCollapsed("The statement after function calls");
}
solveRect(5,8);