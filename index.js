const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-Type": "text/html" });

  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      break;

    case "/about":
      path += "about.html";
      break;

    case "/contact":
      path += "contact-me.html";
      break;

    default:
      path += "404.html";
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end("Error reading file", req.url);
    }
    res.end(data);
  });
});

server.listen(3000, "localhost", () => {
  console.log("Server is running on port 3000");
});
