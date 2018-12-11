var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models/rookie_picker.js");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("POST /nfl_team/selection/:id", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should save the final user nfl team selection", function(done) {
    // Create an object to send to the endpoint
    var Atlanta= {
      text: "Atlanta Falcons",
      description: "User NFL team"
    };

    // POST the request body to the server
    request
      .post("/nfl_team/selection/:id")
      .send(Atlanta)
      .end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = NFL_available_teams;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an("object")
          .that.includes(NFL_available_teams);

        // The `done` function is used to end any asynchronous tests
        done();
      });
  });
});