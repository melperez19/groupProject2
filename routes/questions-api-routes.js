var db = require("../models");

module.exports = function(app) {
  app.get("/api/questions", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Questions.findAll({
    //   include: [db.Post]
    }).then(function(dbQuestions) {
      res.json(dbQuestions);
    });
  });

//   app.get("/api/questions/:id", function(req, res) {
//     // Here we add an "include" property to our options in our findOne query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Post
//     db.Questions.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [db.Post]
//     }).then(function(dbQuestions) {
//       res.json(dbQuestions);
//     });
//   });

//   app.post("/api/questions", function(req, res) {
//     db.Questions.create(req.body).then(function(dbQuestions) {
//       res.json(dbQuestions);
//     });
//   });

//   app.delete("/api/questions/:id", function(req, res) {
//     db.Questions.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbQuestions) {
//       res.json(dbQuestions);
//     });
//   });

};
