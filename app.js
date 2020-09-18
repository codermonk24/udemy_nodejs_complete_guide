const http = require('http');

//function rqListener(req, res) {} -- one way

//http.createServer(function(req,res){});--2nd way

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //process.exit(); usually wedonnt use it .
  const url = req.url;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write(
      '<body><form><input type="text"><button type="submit"></button></form></body>'
    );
    res.write('</html>');
    res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first page</title></head>');
  res.write('<body><h1>hello from node.js server</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(5000);
