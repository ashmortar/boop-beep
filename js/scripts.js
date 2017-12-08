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

  //this adjusts the array based on the criteria set out in the assignment
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

var nameAdjustor = function(output, name) {
  var nameCheck = new RegExp("Dave");
  for (var i = 0; i < output.length; i ++) {
    if (nameCheck.test(output[i])) {
      output[i] = "I'm Sorry, " + name + ". I'm afraid I can't do that.";
    }
  }
  return output;
}






//front end logic
$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input#inputNumber").val());
    var output = boopBeep(inputNumber);
    var name = $("input#name").val();
    //check if a name has been entered and if so run nameAdjustor function
    if ($("input#name").val()  != "") {
        output = nameAdjustor(output, name);
      }
    //check if the revere radio has been selected if so reverse output
    if ($("input:radio[name=reverse]:checked").val() === "true") {
        output.reverse();
      }
    if (inputNumber >= 100) {
      $(".result").text(output);
      $("#number").hide();
      $("#long").fadeIn("slow").delay(2000).fadeOut("fast");
      $(".result").delay(3000).fadeIn("slow");
    } else {
      $(".result").text(output);
      $("#number").hide();
      $("#short").fadeIn("slow").delay(2000).fadeOut("fast");
      $(".result").delay(3000).fadeIn("slow");
    }
  });
});
