const express = require("express");
const router = express.Router();
const { request } = require("graphql-request");
const generateJWT = require("./auth/generateJWT");

const phoenixURL = process.env.PHOENIX;
router.post("/register", async (req, res) => {
  const userObject = req.body.user;
  const findUser = `{
    mutation {
      createUser(
        username: "${userObject.username}",
            email: "${userObject.email}",
            image_url:"${userObject.image_url}",
            phone: "${userObject.phone}",
            first_name:"${userObject.first_name}",
            last_name:"${userObject.last_name}",
            room_no:"${userObject.room_no}"
      ){
        username
      }
    }
  }`;
  const response = await request(phoenixURL, findUser);
  console.log(response);
  const token = generateJWT(userObject);
  res.send({ token });
});

router.post("/login", (req, res) => {
  const userObject = req.body.user;
  const userQuery = `{
    user (username: "${userObject.username}") {
      username,
      first_name,
      last_name,
      room_no
    }}`;
  console.log(userQuery);
  const token = generateJWT(userObject);
  res.send({ token });
});

module.exports = router;
