let numOfTiles = 6;
let winColor;
let score = 0;
let tiles = document.querySelectorAll(".tile");
let rgbDisplay = document.getElementById("rgb");
let message = document.getElementById("message");
let resetButton = document.getElementById("reset");

//  generateRandomColor function
const randomColor = () => {
	let r = Math.ceil(Math.random() * 255);
	let g= Math.ceil(Math.random() * 255);
	let b = Math.ceil(Math.random() * 255);
	return `rgb(${r}, ${g}, ${b})`
}

// generateRandomColors array function
const generateRandomColors = (numOfTiles) => {
	let arr = [];
	for (let i=0; i < numOfTiles; i++){
		arr.push(randomColor());
	}
	return arr;
}

let colors = generateRandomColors(numOfTiles);
console.log(colors);

// pick a color function

const winningColor = () => {
	let random = Math.floor(Math.random() * numOfTiles);
	return colors[random]
}


// update tiles function

const changeColors = (color) => {
	for(let i=0; i < numOfTiles; i++){
		tiles[i].style.backgroundColor = color;
	}	
}



// new level function

winColor = winningColor();

const newLevel = () => {
	colors = generateRandomColors(numOfTiles);
	winColor = winningColor();
	rgbDisplay.textContent = winColor;
	message.textContent = " ";
	renderScore();
	for(let i=0; i < numOfTiles; i++) {
		tiles[i].style.backgroundColor = colors[i];
	}
}


// hard reset function

const hardReset = () => {
	score = 0 
	newLevel();
	renderScore();
}

resetButton.addEventListener("click", function() {
  hardReset();
});


// game function

const play = () => {
	for(let i=0; i < numOfTiles; i++){
		tiles[i].addEventListener("click", function() {
			let clickedColor = this.style.backgroundColor;
			if(clickedColor === winColor){
			message.classList.remove("wrong");
			message.classList.add("right");
			score += 3;
			renderScore();
			newLevel();
			message.textContent = "Correct";
		}else {
			this.style.backgroundColor = "white";
			message.classList.add("wrong");
			message.classList.remove("right");
			message.textContent = "Try Again";
			score -= 1; 
			renderScore();
			};
		});
	};
};

console.log(score)

// render score function

const renderScore = () => {
	document.getElementById("score").innerHTML = "Score: " + score
}


const init = () => {
	newLevel();
	play();
}

init();










