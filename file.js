const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);


// blocking operations .... Synchronous operations.
const result = fs.writeFileSync('./log.txt',"this is the nodejs file");
console.log(result);


// non-blocking operations ... we should always write this non-blocking operations.
fs.writeFile('test.txt',`${new Date().toLocaleString()}`,(err)=>{
    if(err){
        console.error("error found: ",err);
    }
    else{
        console.log("file successfully createed");
    }
})




