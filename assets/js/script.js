var highscores = document.querySelector(".scores")
var timer = document.querySelector(".time")
var content = document.querySelector(".questions")
var secondsLeft = 100;

var test1 = document.querySelector("#startbutton1")

test1.addEventListener("click", setTime())

function setTime(){
var timerInterval = setInterval(function() {
    timer.textContent = secondsLeft + " seconds left";
    secondsLeft--;
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

