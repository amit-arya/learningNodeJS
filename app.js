const http = require('http');

const server = http.createServer((req, res)=>{
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<body><h1>Welcome Home</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(4000);

