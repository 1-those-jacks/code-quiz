
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
var currentQuestionIndex = 0;

// Button is identified.
var takeQuiz = document.getElementById("start");
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

function displayCurrentQuestion(){
	// console.log("Current Question", questionArray[currentQuestionIndex]);
	// creates container with question 1
	var currentQuestion = questionArray[currentQuestionIndex];
	var questionContainer = document.getElementById("question-container");
	var questionTitle = document.createElement("h4");
	questionTitle.textContent = currentQuestion.questionTitle;
	questionContainer.appendChild(questionTitle);
	// creates buttons for potential answers.
	for (var i = 0; i < currentQuestion.answers.length; i++){
		// console.log("Displaying Question", currentQuestion.answers[i]);
		var answerBtn = document.createElement("button");
		answerBtn.value = currentQuestion.answers[i];
		answerBtn.textContent = currentQuestion.answers[i];
		answerBtn.setAttribute("class", "answer-button");
		questionContainer.appendChild(answerBtn);
		// console.log(answerBtn);
	}
		// answerChosen is only selecting the first instance.....
		var answerChosen = document.getElementById("question-container");
		var correctAnswer = document.querySelector(".answer-button");
		answerChosen.addEventListener("click", function(){
			if (correctAnswer.value === currentQuestion.correct){
					//add next question function 
					console.log ("Correct Answer");
					console.log(correctAnswer.value);
					questionContainer.remove();
					nextQuestion();
				// add next question function after introducing time penalty.
			} else if (correctAnswer.value != currentQuestion.correct){
				console.log("This works too");
				console.log(correctAnswer.value);
				questionContainer.remove();
				nextQuestion();
			}
		});}
		// if (answerBtn.value === currentQuestion.correct) {
		// 	console.log("correct answer");
		// } 
		// Move to next question
		// var nextQuestion = document.querySelector(".answer-button");
		// nextQuestion.addEventListener("click", function(event){
		// 	console.log("button pressed");
		// 	if (i < questionArray.length){
		// 		console.log("If statement works");
		// 		displayCurrentQuestion();
		// 	}
		// });
		// if (i > currentQuestion.answers.length) {
		// 	handleHighScores();
		// }
function nextQuestion(){
	console.log("It carries over");
	currentQuestionIndex++;
	displayCurrentQuestion();
}	


function handleHighScores(){
	console.log("High Scores", localStorage.getItem("scores"));
	var currentScores = JSON.parse(localStorage.getItem("scores")) || [];
	// input for initials and scores
	window.location.href("high_scores.html");
}
// Button is clicked resulting in function. Button is removed from page and replaced with question 1
takeQuiz.addEventListener("click", function(event){
	console.log(event.target);
	startTime();
	takeQuiz.remove();
	displayCurrentQuestion();
});
