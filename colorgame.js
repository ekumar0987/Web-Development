var colors = generateRandomColors(6);


var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(var i=0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.background = colors[i];

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
		}
	});
}

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