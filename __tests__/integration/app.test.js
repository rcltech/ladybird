const app = require("../../app");
const chai = require("chai");
const request = require("supertest");

const expect = chai.expect;

describe("API server", () => {
  it("should return 200 status on ping", function(done) {
    request(app)
      .get("/ping")
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
  it("should return OK on ping", done => {
    request(app)
      .get("/ping")
      .end((err, res) => {
        expect(res.text).to.equal("OK");
        done();
      });
  });
});
