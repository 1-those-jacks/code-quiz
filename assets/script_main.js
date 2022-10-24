// Question set
var questionArray = [
	{
		// format questions with actual content once cycling...
		num: 1,
		questionTitle: "What is this?",
		answers: ["A", "B", "C", "D"],
		correct: "B",
	},
	{
		// format questions with actual content once cycling...
		num: 2,
		questionTitle: "What is this again?",
		answers: ["A", "B", "C", "D"],
		correct: "A",
	},
	{
		// format questions with actual content once cycling...
		num: 3,
		questionTitle: "What is this again AGAIN?",
		answers: ["A", "B", "C", "D"],
		correct: "A",
	}
	// add additional questions below....
];
// Button is identified.
var takeQuiz = document.getElementById("start");
var timeEl = document.querySelector(".time");
var submitScore = document.getElementById("submit-score");
var playAgain = document.getElementById("play-again");
var secondsLeft = 90;
var currentQuestionIndex = 0;
// Basic timer function connected to class "time" in h1.
function startTime() {
	var timerInterval = setInterval(function () {
		secondsLeft--;
		timeEl.textContent = secondsLeft + " seconds left!"

		if (secondsLeft === 0) {
			handleHighScores();
		}
	}, 1000);
}
// After takeQuiz is clicked, the first question is generated.
function displayCurrentQuestion() {
	// console.log("Current Question", questionArray[currentQuestionIndex]);
	// creates container with question 1
	var currentQuestion = questionArray[currentQuestionIndex];
	var questionContainer = document.getElementById("question-container");
	var questionTitle = document.createElement("h4");
	questionTitle.textContent = currentQuestion.questionTitle;
	questionContainer.appendChild(questionTitle);
	// creates buttons for potential answers.
	for (var i = 0; i < currentQuestion.answers.length; i++) {
		// console.log("Displaying Question", currentQuestion.answers[i]);
		var answerBtn = document.createElement("button");
		answerBtn.value = currentQuestion.answers[i];
		answerBtn.textContent = currentQuestion.answers[i];
		answerBtn.setAttribute("class", "answer-button");
		questionContainer.appendChild(answerBtn);
	}

	function selectAnswer() {
		var answerChoices = document.querySelector("#question-container");
		answerChoices.addEventListener("click", function (event) {
			var answerSelected = event.target.value;
			if (answerSelected === currentQuestion.correct) {
				console.log("Correct");
				questionContainer.remove();
				nextQuestion();
			} else {
				console.log("Wrong");
				secondsLeft -= 5
				questionContainer.remove();
				nextQuestion();
			}
		});
	}
	selectAnswer();
}
// Upon completing output, page is wiped and next question is generated till end of quiz.
function nextQuestion() {
	// console.log("It carries over");
	currentQuestionIndex++;
	if (currentQuestionIndex < questionArray.length) {
		displayCurrentQuestion();
	} else {
		console.log("Completed Quiz");
		timeEl.remove();
		handleHighScores();
	}
}
// After completing the quiz, the high scores page is generated.
function handleHighScores() {
	document.getElementById("high-scores").style.display = "contents";
	var score = secondsLeft;
	localStorage.setItem("score", JSON.stringify(score));
	var currentScore = localStorage.getItem("score");
	document.getElementById("current-score").innerHTML = "Score: " + currentScore;
}
// Button is clicked resulting in function. Button is removed from page and replaced with question 1
takeQuiz.addEventListener("click", function (event) {
	console.log(event.target);
	startTime();
	takeQuiz.remove();
	displayCurrentQuestion();
});

submitScore.addEventListener("click", function (event) {
	console.log("Score Submitted");
	var addInitials = document.getElementById("add-initials");
	logInitials = addInitials.value;
	localStorage.setItem("initials", JSON.stringify(logInitials));
	var divPlacement = document.getElementById("high-scores");
	var scoreContainer = document.createElement("div");
	scoreContainer.textContent = localStorage.getItem("initials") + " " + localStorage.getItem("score");
	divPlacement.appendChild(scoreContainer);
});

playAgain.addEventListener("click", function (event) {
	window.location.reload();
});
