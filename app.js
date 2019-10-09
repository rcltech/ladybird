const express = require("express");
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'client','build')));
app.get("/*", (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, 'client','build', 'index.html'))
});

const PORT = (process.env.PORT) || 3000;

app.listen(PORT);
