//path dependency
var path = require("path");

//load friend data
var friendsArrData = require("../data/friends");
console.log(friendsArrData);

function lowestValInArr(array) {
  var index = 0;
  var value = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < value) {
      value = array[i];
      index = i;
    }
  }
  return index;
}

function compatible(object) {
  var totalDiffArr = [];
  for (var i = 0; i < friendsArrData.length; i++) {
    var totalDifference = 0;
    for (var j = 0; j < object.scores.length; j++) {
      var diff = object.scores[j] - friendsArrData[i].scores[j];
      if (diff < 0) {
        diff = diff * -1;
      }
      totalDifference += diff;
    }
    console.log(totalDifference);
    totalDiffArr.push(totalDifference);
  }
  index = lowestValInArr(totalDiffArr);
  var friendMatch = friendsArrData[index];
  console.log(friendMatch);
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