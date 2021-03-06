var s1 = document.querySelector("#s1");
var s2 = document.querySelector("#s2");
var input = document.querySelector("input");
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var roundcount = document.querySelector("#roundcount");

var score1 = 0;
var score2 = 0;
input.value = 5;

p1.addEventListener("click", function(){
	if(score1 != input.value && score2 != input.value){
		score1++;
		if(score1 == input.value){
			s1.textContent = score1;
			s1.classList.add("winner");
		}
		else if(score1 < input.value){
			s1.textContent = score1;
		}
	}	
})

p2.addEventListener("click", function(){
	if(score1 != input.value && score2 != input.value){
		score2++;
		if(score2 == input.value){
			s2.textContent = score2;
			s2.classList.add("winner");
		}
		else if(score2 < input.value){
			s2.textContent = score2;
		}
	}
})

reset.addEventListener("click", function(){
	score1 = 0;
	score2 = 0;
	s1.textContent = score1;
	s2.textContent = score2;
	s1.classList.remove("winner");
	s2.classList.remove("winner");
})

input.addEventListener("change", function(){		//change event triggered anytime a value changes!
	roundcount.textContent = input.value;
})
