var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // -----------------------------------------------To link to the HTML Pages-------------------------------------------------------------

// A GET Route to /survey which should display the quiz page.
app.get("/quiz", function (request, response) {
  response.sendFile(path.join(__dirname, "../public/quiz.html"));
});

// A default, catch-all route that leads to home.html which displays the home page.
app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname, "../public/home.html"));
});

// A default, catch-all route that leads to home.html which displays the home page.
app.get("/404", function (request, response) {
  response.sendFile(path.join(__dirname, "../public/404.html"));
});


};


// ------------------------- Code Below is Boiler Plate for Loading the Database-------------------------------------------------

//   // Load index page
//   app.get("/", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.render("index", {
//         msg: "Welcome!",
//         examples: dbExamples
//       });
//     });
//   });

//   // Load example page and pass in an example by id
//   app.get("/example/:id", function(req, res) {
//     db.Example.findOne({ where: { id: req.params.id } }).then(function(
//       dbExample
//     ) {
//       res.render("example", {
//         example: dbExample
//       });
//     });
//   });

//   // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
// };


