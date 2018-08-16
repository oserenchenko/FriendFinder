//path dependency
var path = require("path");

//load friend data
var friendsArrData = require("../data/friends");

module.exports = function (app) {
  //GET route to api/friends
  app.get("/api/friends", function (req, res) {
    res.json(friendsArrData)
  });

  //POST route to api/friends
  app.post("/api/friends", function (req, res) {
    friendsArrData.push(req.body);
    res.json(true);
  })
}