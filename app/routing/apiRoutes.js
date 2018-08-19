//path dependency
var path = require("path");

//load friend data
var friendsArrData = require("../data/friends");
console.log(friendsArrData);
function compatible(object) {
  for (var i = 0; i < friendsArrData.length; i++) {
    for (var j = 0; j < object.scores.length; j++) {

    }
  }
}

module.exports = function (app) {
  //GET route to api/friends
  app.get("/api/friends", function (req, res) {
    res.json(friendsArrData)
  });

  //POST route to api/friends
  app.post("/api/friends", function (req, res) {
    if (req.body.scores.length === 10) {
      compatible(req.body);
      friendsArrData.push(req.body);
      res.json(true);
    }

  })
}