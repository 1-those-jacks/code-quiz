
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
		questionContainer.appendChild(answerBtn);}
		
	function selectAnswer(){
			var answerChoices = document.querySelector("#question-container");
			answerChoices.addEventListener("click", function(event){
			var answerSelected = event.target.value;
			if (answerSelected === currentQuestion.correct){
				console.log("Correct");
				questionContainer.remove();
				nextQuestion();
			} else { console.log("Wrong");
			questionContainer.remove();
			nextQuestion();}
				});
			}
			selectAnswer();
		}

function nextQuestion(){
	// console.log("It carries over");
	currentQuestionIndex++;
	if (currentQuestionIndex < questionArray.length){
		displayCurrentQuestion();
	} else {console.log("Completed Quiz");
		handleHighScores();}
}	


function handleHighScores(){
	console.log("High Scores", localStorage.getItem("scores"));
	var currentScores = JSON.parse(localStorage.getItem("scores")) || [];
	// input for initials and scores
	window.location.href(".high_score.html");
}
// Button is clicked resulting in function. Button is removed from page and replaced with question 1
takeQuiz.addEventListener("click", function(event){
	console.log(event.target);
	startTime();
	takeQuiz.remove();
	displayCurrentQuestion();
});
