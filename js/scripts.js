var myCount = function (stop, step) {
  var myCountArr = [];
  var newHTML = [];
  var start = 0;
  while (start < stop) {
    start+= step;
    myCountArr.push(start)
  };


  for (var i = 0; i < myCountArr.length; i++) {
    newHTML.push('<span>' + myCountArr[i] + '</span>')
  };

};

$(function() {
  $("form#counting").submit(function(event) {
    var stopNumber = $("input[name=stop_number]").val();
    var stepNumber = $("input[name=multiple_number]").val();
    myCount(stopNumber, stepNumber);
    $("p#results").empty().html(newHTML.join(""));
  });

  event.preventDefault();

});
