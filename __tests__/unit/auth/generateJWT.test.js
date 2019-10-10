const generateJWT = require("../../../routes/auth/generateJWT");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const chai = require("chai");
dotenv.config();

const expect = chai.expect;

describe("JWT generator is given an object", () => {
  it("should send a valid JWT token", function() {
    const testObj = {
      key1: "value1",
      key2: "value2",
    };
    const token = generateJWT(testObj);
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    expect(decodedToken).to.include(testObj);
  });
});
