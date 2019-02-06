// var db = require("../models");

// module.exports = function(app) {
//   app.get("/api/userQuestionAnswer", function(req, res) {
//     db.UserQuestionAnswer.findAll({
//       include: [db.User],
//       include: [db.Questions]
//     }).then(function(dbUserQuestionAnswer) {
//       res.json(dbUserQuestionAnswer);
//     });
//   });

//   app.get("/api/userQuestionAnswer/:id", function(req, res) {
//     db.UserQuestionAnswer.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [db.User],
//       include: [db.Questions]
//     }).then(function(dbUserQuestionAnswer) {
//       res.json(dbUserQuestionAnswer);
//     });
//   });

//   app.post("/api/userQuestionAnswer", function(req, res) {
//     db.UserQuestionAnswer.create(req.body).then(function(dbUserQuestionAnswer) {
//       res.json(dbUserQuestionAnswer);
//     });
//   });
// };
