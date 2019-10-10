const dotenv = require("dotenv");
dotenv.config();

const app = require("../../app");
const generateJWT = require("../../routes/auth/generateJWT");
const chai = require("chai");
const request = require("supertest");
const expect = chai.expect;

const sampleUserData = {
  id: "randomid9878239",
  username: "test123",
  email: "email@test.com",
  image_url: "sdhjfvbjheknds/u8w9e8urf9.coomewihufkb$",
  first_name: "Test",
  last_name: "213",
  phone: "+923-123456754",
  room_no: "924"
};

describe("/api/user/register", () => {
  it("should return the token for the registered user", function(done) {
    request(app)
      .post("/api/user/register")
      .send({ user: sampleUserData })
      .set("Accept", "application/json")
      .expect(200)
      .end((err, res) => {
        const token = generateJWT(sampleUserData);
        expect(res.body.token).to.equal(token);
        done();
      });
  });
});

describe("/api/user/login", () => {
  it("should return the token for the user", function(done) {
    request(app)
      .post("/api/user/login")
      .send({ user: sampleUserData })
      .set("Accept", "application/json")
      .expect(200)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});
