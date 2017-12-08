//back end logic

var boopBeep = function (inputNumber) {

  //a blank array in which we will store values and operateupon them
  var numberArray = [];
  var oneCheck = new RegExp("1");
  var zeroCheck = new RegExp("0");

  //this takes the inputNumber and create an array of all integers from 0 through that number
  for (var i = 0; i <= inputNumber; i++) {
    numberArray.push(i);
  }

  //this identifies 1 and replaces it with the string "boop!"

  for (var j = 0; j < numberArray.length; j ++) {
    if(((numberArray[j] % 3) === 0) && (numberArray[j] != 0)) {
      numberArray[j] = "I'm sorry, Dave. I'm afraid I can't do that.";
    } else if (zeroCheck.test(numberArray[j])) {
        numberArray[j] = "beep!";
    } else if (oneCheck.test(numberArray[j])) {
        numberArray[j] = "boop!";
      } else {
        console.log("greater than 1");
      }
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
