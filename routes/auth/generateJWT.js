const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const generateJWT = jsonObject => jwt.sign(jsonObject, process.env.JWT_SECRET);

module.exports = generateJWT;
