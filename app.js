const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const user = require("./routes/user");

app.use(bodyParser.json());
app.get("/ping", (req, res) => {
  res.send("OK");
});

app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/api/user", user);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

module.exports = app;
