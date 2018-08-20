//path dependency
var path = require("path");
var jsdom = require('jsdom');
const {
  JSDOM
} = jsdom;
const {
  window
} = new JSDOM();
const {
  document
} = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);

//load friend data
var friendsArrData = require("../data/friends");

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


module.exports = function (app) {
  //GET route to api/friends
  app.get("/api/friends", function (req, res) {
    res.json(friendsArrData)
  });

  //POST route to api/friends
  app.post("/api/friends", function (req, res) {
    if (req.body.scores.length === 10) {
      var totalDiffArr = [];
      var friendMatchName = '';
		  var friendMatchPic = '';
      for (var i = 0; i < friendsArrData.length; i++) {
        var totalDifference = 0;
        for (var j = 0; j < req.body.scores.length; j++) {
          var diff = req.body.scores[j] - friendsArrData[i].scores[j];
          if (diff < 0) {
            diff = diff * -1;
          }
          totalDifference += diff;
        }
        console.log(totalDifference);
        totalDiffArr.push(totalDifference);
      }
      index = lowestValInArr(totalDiffArr);
      friendMatchName = friendsArrData[index].name;
      friendMatchPic = friendsArrData[index].photo;
      friendsArrData.push(req.body);
    }
    res.json({
      status: 'OK',
      friendMatchName: friendMatchName,
      friendMatchPic: friendMatchPic
    });
  })
}