// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  // saveExample: function(example) {
  //   return $.ajax({
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     type: "POST",
  //     url: "api/examples",
  //     data: JSON.stringify(example)
  //   });
  // },
  getQuestions: function (cb) {
    return $.ajax({
      url: "api/questions",
      type: "GET"
    }).then(function (data) {
      //  console.log(data);
      cb(data);
    });
  },
  newUser: function (cb) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/user",
      data: JSON.stringify(cb)
    }).then(function (data) {
      //  console.log(data);
      cb(data);
    });
  },
  getUser: function (cb) {
    return $.ajax({
      url: "api/user",
      type: "GET"
    }).then(function (data) {
      //  console.log(data);
      cb(data);
    });
  }
  //,
  // deleteExample: function(id) {
  //   return $.ajax({
  //     url: "api/examples/" + id,
  //     type: "DELETE"
  //   });
  // }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function () {
  API.getExamples().then(function (data) {
    var $examples = data.map(function (example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// QUIZ AREA
// Add event listeners to the submit and delete buttons

var card = $("#quiz-area");
var countStartNumber = 30;

// Question set
var questions = [];

// Variable to hold our setInterval
var timer;

API.getQuestions(function (data) {
  questions = data;
  console.log(questions);

  var game = {
    questions: questions,
    currentQuestion: 0,
    gamesPlayed: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,

    countdown: function () {
      game.counter--;
      $("#counter-number").text(game.counter);
      if (game.counter === 0) {
        console.log("TIME UP");
        game.timeUp();
      }
    },

    loadQuestion: function () {
      console.log(questions);
      timer = setInterval(game.countdown, 1000);

      // console.log("current question, choice?: " + questions[game.currentQuestion].choices);
      if (game.gamesPlayed === 0) {
        questions[game.currentQuestion].choices = questions[game.currentQuestion].choices.split(", ");
      };
      // console.log(questions[i].choices);

      card.html("<h2>The category is: " + questions[game.currentQuestion].category + "</h2>" +
        "<h2>" + questions[game.currentQuestion].question + "</h2>");

      for (var i = 0; i < questions[game.currentQuestion].choices.length; i++) {
        // currentQuestion = 0

        card.append("<button class='answer-button' id='button' data-name='" + i + "'>" + questions[game.currentQuestion].choices[i] + "</button>");
      }
    },

    nextQuestion: function () {
      game.counter = countStartNumber;
      $("#counter-number").text(game.counter);
      game.currentQuestion++;
      game.loadQuestion();
    },

    timeUp: function () {
      clearInterval(timer);

      $("#counter-number").html(game.counter);

      card.html("<h2>Out of Time!</h2>");
      card.append("<h3>The Correct Answer was: " + questions[game.currentQuestion].correctAnswer);
      card.append("<img src='" + questions[game.currentQuestion].image + "' />");

      if (game.currentQuestion === questions.length - 1) {
        setTimeout(game.results, 3 * 1000);
      } else {
        setTimeout(game.nextQuestion, 3 * 1000);
      }
    },

    results: function () {
      clearInterval(timer);

      card.html("<h2>All done, here's how you did!</h2>");

      $("#counter-number").text(game.counter);

      card.append("<h3>Correct Answers: " + game.correct + "</h3>");
      card.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
      card.append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
      card.append("<br><button id='start-over'>Start Over?</button>");
    },

    clicked: function (e) {
      clearInterval(timer);
      console.log(parseInt($(e.target).attr("data-name")) + questions[game.currentQuestion].correctAnswer);
      if (parseInt($(e.target).attr("data-name")) === questions[game.currentQuestion].correctAnswer) {
        game.answeredCorrectly();
      } else {
        game.answeredIncorrectly();
      }
    },

    answeredIncorrectly: function () {
      game.incorrect++;

      clearInterval(timer);
      var correctChoice = questions[game.currentQuestion].correctAnswer;
      card.html("<h2>Nope!</h2>");
      card.append(
        "<h3>The Correct Answer was: " + questions[game.currentQuestion].choices[correctChoice] + "</h3>"
      );
      card.append("<img src='" + questions[game.currentQuestion].image + "' />");

      if (game.currentQuestion === questions.length - 1) {
        // setTimeout(game.results, 3 * 1000);
        game.results();
      } else {
        setTimeout(game.nextQuestion, 3 * 1000);
      }
    },

    answeredCorrectly: function () {
      clearInterval(timer);

      game.correct++;

      card.html("<h2>Correct!</h2>");
      card.append("<img src='" + questions[game.currentQuestion].image + "' />");

      if (game.currentQuestion === questions.length - 1) {
        setTimeout(game.results, 3 * 1000);
      } else {
        setTimeout(game.nextQuestion, 3 * 1000);
      }
    },

    reset: function () {
      game.gamesPlayed++;
      game.currentQuestion = 0;
      game.counter = countStartNumber;
      game.correct = 0;
      game.incorrect = 0;
      game.loadQuestion();
    }
  };
});

// CLICK EVENTS

$(document).on("click", "#start-over", function () {
  game.reset();
});

$(document).on("click", ".answer-button", function (e) {
  game.clicked(e);
});

$(document).on("click", "#start", function (e) {
  e.preventDefault();
  console.log("#start");
  $("#sub-wrapper").prepend(
    "<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>"
  );
  var username = {
    user_name: $("#username").val().trim(),
    best_score: 0
  };
  console.log(username);

  API.newUser(username).then(function () {
    game.loadQuestion();

    // $.post("/api/user").then(function(data) {
    //   $("#username").text(data);
    // });

    // game.loadQuestion();
  });

});