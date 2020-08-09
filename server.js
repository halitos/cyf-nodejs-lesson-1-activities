const express = require("express");
const app = express();
const port = 9090;

app.get("/", (request, response) => {
  response.json({
    recipient: "CodeYourFuture",
    message: "Hello there!",
  });
});

app.get("/hello-cyf", (req, res) => {
  res.send("Hello Code Your Future!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
