//back end logic

var boopBeep = function (inputNumber) {
  var numberArray = [];
  for (var i = 0; i <= inputNumber; i++) {
    numberArray.push(i);
  }
  return numberArray;
}








//front end logic
$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input#inputNumber").val());
    var output = boopBeep(inputNumber);
    $(".result").text(output);
  });
});
