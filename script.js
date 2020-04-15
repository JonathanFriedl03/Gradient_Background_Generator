var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
let random = document.getElementById('random');

setGradient();
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener('click', generateRandomColors);

function generateRandomColors() {
	//make an array
	let arr = [];
	//add number of random colors to array
	for (let i = 0; i < 2; i++) {
	  //get random color and push into array
	  arr.push(randomColor());
	}
	//return that array
	body.style.background = 
	"linear-gradient(to right, " 
	+ arr[0]
	+ ", " 
	+ arr[1]
	+ ")";
	css.textContent = body.style.background + ";";
  }
  function randomColor() {
	//pick a red from 0 - 255 same for greeen and blue
	let red = getRGBNums();
	let green = getRGBNums();
	let blue = getRGBNums();	
	return "rgb(" + red + ", " + green + ", " + blue + ")";
  }
  function getRGBNums(){
	let rgbNum = Math.floor(Math.random() * 256);
return rgbNum;  
}