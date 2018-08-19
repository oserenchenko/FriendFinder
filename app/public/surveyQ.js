var surveyQ = ["You look for opportunities for adventure in your life.", "You would rather have a cozy night in on a Friday night than a wild night out.", "You enjoy meeting new people.", "You would find it very difficult to spend 24hrs without access to social media.", "You like to spend a lot of time outdoors", "You have traveled to many different places and plan to visit many more.", "Your family is very important to you.", "You spend a lot of time daydreaming and fantasizing.", "You are very opinionated and outspoken.", "You learn best through experience and hands on activities."];

for (var i = 0; i < surveyQ.length; i++) {
  var count = i + 1;
  var qNum = $("<h3>Question #" + count + "</h3>");
  var newQ = $("<p class='newQ'>" + surveyQ[i] + "</p>");
  var newDropDown = '<div class="col-auto my-1"> <select class="custom-select survey-options mr-sm-2 ans' + count + '" id="inlineFormCustomSelect"> <option selected>Select an Option</option> <option value="1">1 (Strongly Disagree)</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5 (Strongly Agree)</option> </select> </div>'
  $(".survey-questions").append(qNum, newQ, newDropDown);
}
