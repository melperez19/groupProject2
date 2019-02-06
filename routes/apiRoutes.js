var db = require("../models");
var axios = require("axios");


module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });

  // Get all Ebay API data
  var apiEndpointBaseURL = "https://svcs.ebay.com/services/search/FindingService/v1?";
  var apiKey = process.env.ebayAPI;
  app.get("/jsonTest", function (req, res) {
    console.log(req.query);
    var SearchTerm=req.query.q;
    axios.get(`${apiEndpointBaseURL}SECURITY-APPNAME=${apiKey}&OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${SearchTerm}&paginationInput.entriesPerPage=10&GLOBAL-ID=EBAY-US&siteid=0&categoryId=31734`).then(function(data){
      // &siteid=0
      // console.log(data.data.findItemsByKeywordsResponse.errorMessage.error);
      res.json(data.data);
    }) 
  });
}
