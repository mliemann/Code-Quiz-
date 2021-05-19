var highscores = document.querySelector(".scores")
var timer = document.querySelector(".time")
var alerts = document.querySelector(".questions")
var secondsLeft = 100;
var test = document.querySelector(".startbutton")
var test1 = document.querySelector("#startbutton1")

test1.onclick = function setTime(){

var timerInterval = setInterval(function() {
    test.remove()
    alerts.textContent= "You've started the test. "
    timer.textContent = secondsLeft + " seconds left";
    secondsLeft--;
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      timer.textContent = 0
      
    }
  }, 1000);
}

