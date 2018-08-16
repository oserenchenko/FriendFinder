//Path dependency
var path = require("path");


module.exports = function (app) {
  //GET route to survey page
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"))
  });

  //default GET route to home page
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
  });
}