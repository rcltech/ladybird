const express = require("express");
const app = express();
const path = require("path");

app.get("/ping", (req, res) => {
  res.send("OK");
});

app.use(express.static(path.join(__dirname, "client", "build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

module.exports = app;
