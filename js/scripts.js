//back end logic

var boopBeep = function (inputNumber) {
  return inputNumber;
}








//front end logic
$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var inputNumber = $("input#inputNumber").val();
    var output = boopBeep(inputNumber);
    $(".result").text(output);
  });
});
