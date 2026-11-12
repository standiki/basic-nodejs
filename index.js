const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, (error) => {
  // Don't silently fail, give hint for why failing
  if (error) {
    throw error;
  }
  console.log(`port running on localhost:${PORT}!`);
});
