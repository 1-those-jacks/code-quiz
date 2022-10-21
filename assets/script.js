// Button is identified.
var questionArray = [
	{
		num: 1,
		questionTitle: "What is this?",
		answers: ["A", "B", "C", "D"],
		correct: "A",
		message: function() {
			console.log("The Answer was ...")
		}
	}
];
var currentQuestionIndex = 0
var takeQuiz = document.querySelector("button");
var timeEl = document.querySelector(".time");
var secondsLeft = 90;

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
function startQuiz(){
	var tag = document.createElement("p");
	document.body.appendChild(tag);
	tag.textContent = "Test";
	displayCurrentQuestion();
}

function displayCurrentQuestion(){
	console.log("Current Question", questionArray[currentQuestionIndex]);
	var currentQuestion = questionArray[currentQuestionIndex];
	var questionContainer = document.getElementById("questionContainer");
	var questionTitle = document.createElement("h4");
	questionTitle.textContent = currentQuestion.questionTitle;
	questionContainer.appendChild(questionTitle);
	
	for (var i = 0; i < currentQuestion.answers.length; i++){
		console.log("Displaying Question", currentQuestion.answers[i]);
		var answerBtn = document.createElement("button");
		answerBtn.value = currentQuestion.answers[i];
		answerBtn.textContent = currentQuestion.answers[i];
		answerBtn.setAttribute("class", "answer-button")
		questionContainer.appendChild(answerBtn);
		// if (answerBtn.value === currentQuestion.correct) {
		// 	document.writeln("Correct Answer");
		// }

		if (i > currentQuestion.answers.length) {
			handleHighScores();
		}
	}
}

function handleHighScores(){
	console.log("High Scores", localStorage.getItem("scores"));
	var currentScores = JSON.parse(localStorage.getItem("scores")) || [];
	// input for initials and scores
	window.location.href("high_scores.html");
}
// Button is clicked resulting in function - event listeners is an object.
// takeQuiz.addEventListener("click", function(event){
// 	console.log(event.target);
// 	startTime();
// 	startQuiz();
// });

