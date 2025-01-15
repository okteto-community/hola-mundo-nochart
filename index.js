const express = require("express");
const app = express();

const PORT = 8080;

app.get("/", function (req, res) {
  res.send("Hola mundo Jan 15!");
});

app.listen(PORT, function () {
  console.log("Started hola-mundo server on %d", PORT);
});
