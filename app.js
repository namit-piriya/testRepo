const http = require("http");
const reqListener = function(req,res){
  res.writeHead(200);
  res.end('Hello Worlsd!');
}
const server = http.createServer(reqListener);
console.log("server will listen now on 8000")
server.listen(8000);
