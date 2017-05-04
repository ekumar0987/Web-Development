var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square"); 
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode button event listeners
	for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");

		this.classList.add("selected");
		//figure out how many squares to show
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6
		reset();
		})
	}

	//square listeners
	for(var i=0; i < squares.length; i++){
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grad color of clicked square
		var clickedColor = this.style.background;
		//compare color to picked color
		if(clickedColor != pickedColor){
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		else{
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?"
			}
		});
	}

	reset();
}


function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i=0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block" /*show all squares for hard mode*/
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	//change colors of squares
	for(var i=0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
});


function changeColors(color){
	//loop through all squares
	for(var i=0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;   
	}
}

function pickColor(){
	//Picks a random number from 0 to 1
	var rand = Math.random();
	var randIndex = Math.floor(rand * colors.length + 1);
	return colors[randIndex];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor());
	}

	//return array
	return arr;
}

function randomColor(){
	//pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);

	//pick a green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	
	//pick a blue from 0 to 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}