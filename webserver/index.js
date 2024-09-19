const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()} ${req.url} : New Req Received\n`;
    fs.appendFile("log.txt", log, (err)=>{
      res.write("hello from server again");
    })
    switch(req.url){
        case "/":{
          res.end("this is home page");
          break;
        }
        case "/about":{
            res.end("this is about page");
            break;
        }
        default : res.end("404 page not found");
    }
    //console.log(req.headers);
    //console.log("New Req Rec");
    //res.end("connection established");
});

myServer.listen(8000, ()=>{
 console.log("server started");
});

