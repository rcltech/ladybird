const express = require("express");
const router = express.Router();
const generateJWT = require("./auth/generateJWT");

router.post("/register", (req, res) => {
  const userObject = req.body.user;
  const token = generateJWT(userObject);
  res.send({ token });
});

router.post("/login", (req, res) => {
  const userObject = req.body.user;
  const token = generateJWT(userObject);
  res.send({ token });
});

module.exports = router;
