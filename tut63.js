// console.log("hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000; //portname the server the html will run on

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  //writing the html here 
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
      <title>Links and images</title>
  </head>
  <body>
      <a href="https://google.com" target="_blank">Go to google</a><br> 
      <a href="https://facebook.com" target="_blank">Go to facebook</a><br>
      <a href="https://chess.com" target="_blank">Go to chess</a><br>
      <a href="https://linkedin.com" target="_blank">Go to linkedin</a><br>
      <a href="/tut4.html" target="_blank">tut 4</a>
  
      <!-- when image does not load alt tab is shown -->
      <img src="https://source.unsplash.com/random/500x500/?wallpaper,landscape" alt="error loading images">
  
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//REPL =read execute print loop
// write node in powershell to get node repl and we can write normaljs code which will execute line by line
// write .exit to exit node