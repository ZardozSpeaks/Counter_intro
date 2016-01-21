
var myCount = function (stop, step) {
  var myCountArr = [];
  var start = 0;
  while (start < stop) {
    start+= step;
    myCountArr.push(start)
  };

  return myCountArr;

};
