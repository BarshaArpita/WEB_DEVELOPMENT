//checking purpose
// console.log("its working");


//import modules
const http = require("http");
//console.log(http);

//create a server
const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("welcome");
   }else if(req.url === "/service"){
    res.writeHead(200,{"content-type":"text/plain"});
    res.end("service");
   }else {
     res.writeHead(404,{"content-type":"text/plain"});
     res.end("Resource Not Found");
   } 
});

//Listen Server
const port = 4000;
server.listen(port,()=> {
console.log(`Server is running on port ${port}`);

});


