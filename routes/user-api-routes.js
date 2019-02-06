var db = require("../models");

module.exports = function(app) {
  app.get("/api/user", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/user/:userName", function(req, res) {
    db.User.findOne({
      where: {
        user_name: req.params.userName
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.patch("/api/user", function(req, res) {
    console.log("patch", req.body);
    db.User.update({
      best_score: req.body.best_score
    }, {
      where: {
        user_name: req.body.user_name
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
