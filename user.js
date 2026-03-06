const http = require('http');
const server = http.createServer((req,res) => {
  if(req.url==='/') {
    res.writeHead({'content-type':'text/html'});
    res.write('<h1>Home Page</h1>');
    res.write('<p>Welcome to the home page</p>');
  }
  res.setHeader('content-type','text/html');
  res.write('<h1>Page Not Found</h1>');
  res.write('<p>The page you are looking for does not exist</p>');
   return res.end();
});

const PORT = 3030;
server.listen(PORT, () => {
  console.log(`Server is listening on port at http://localhost:${PORT}`);
});