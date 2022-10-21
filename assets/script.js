// Button is identified.
var takeQuiz = document.querySelector("button");
var timeEl = document.querySelector(".time");
var secondsLeft = 90;
// Button is clicked resulting in function X
takeQuiz.addEventListener("click", function(){
	startTime();
	startQuiz();
});
// Basic timer function connected to class "time" in h1.
function startTime(){
	var timerInterval = setInterval(function(){
		secondsLeft--;
		timeEl.textContent = secondsLeft + " seconds left!"

		if(secondsLeft === 0){
			clearInterval(timerInterval);
			return;
		}
	}, 1000);
}

// Creates first element to store first question.
// function startQuiz(){
// 	var tag = document.createElement("p");
// 	document.body.appendChild(tag);
// 	tag.textContent = "Test";
// }
