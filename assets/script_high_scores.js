var currentScore = localStorage.getItem("scores");

function presentScore(){
	var currentScorePresent = document.getElementById("scores");
	console.log(localStorage.getItem("scores"));
}
presentScore();
