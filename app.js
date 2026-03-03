const http = require('http');
// function requestListener(req, res) {
//   console.log('Received request');
// }
// process.exit();
// http.createServer(requestListener).listen(8080, () => {
//   console.log('Server is listening on port 8080');
// });

const server = http.createServer((req,res) => {
   console.log(req.url,req.method,req.headers);
  res.writeHead('content-type','text/html');
  res.write('html');
  res.write('hello world');
  res.end();
}
);
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port at http://localhost:${PORT}`);
});