var db = require("../models");

module.exports = function(app) {
  app.get("/api/questions", function(req, res) {
    db.Questions.findAll({}).then(function(dbQuestions) {
      res.json(dbQuestions);
    });
  });
};
