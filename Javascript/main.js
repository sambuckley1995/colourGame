let numOfTiles = 6;
let winColor;
let score = 0;
let tiles = document.querySelectorAll(".tile");
let rgbDisplay = document.getElementById("rgb");
let message = document.getElementById("message");
let resetButton = document.getElementById("reset");

//  generateRandomColor function
const randomColor = () => {
  return `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(
    Math.random() * 255
  )}, ${Math.ceil(Math.random() * 255)})`;
};
// generateRandomColors array function - poor naming convention, sorry
export const generateRandomColors = numOfTiles => {
  let colours = [];
  for (let i = 0; i < numOfTiles; i++) {
    colours.push(randomColor());
  }
  return colours;
};

let colors = generateRandomColors(numOfTiles);

// pick a color function

export const winningColor = () => {
  let random = Math.floor(Math.random() * numOfTiles);
  return colors[random];
};

// new level function

winColor = winningColor();

const newLevel = () => {
  colors = generateRandomColors(numOfTiles);
  winColor = winningColor();
  rgbDisplay.textContent = winColor;
  renderScore();
  for (let i = 0; i < numOfTiles; i++) {
    tiles[i].style.backgroundColor = colors[i];
  }
};

// hard reset function

const hardReset = () => {
  score = 0;
  newLevel();
  renderScore();
};

resetButton.addEventListener("click", function() {
  hardReset();
});

// game function

const play = () => {
  for (let i = 0; i < numOfTiles; i++) {
    tiles[i].addEventListener("click", function() {
      let clickedColor = this.style.backgroundColor;
      if (clickedColor === "white") {
        console.log("please stop trying to break the game");
      } else {
        if (clickedColor === winColor) {
          message.classList.remove("wrong");
          message.classList.add("right");
          score += 3;
          renderScore();
          newLevel();
          message.textContent = "Correct";
        } else {
          this.style.backgroundColor = "white";
          message.classList.add("wrong");
          message.classList.remove("right");
          message.textContent = "Try Again";
          score -= 1;
          renderScore();
        }
      }
    });
  }
};

// render score function

export const renderScore = () => {
  document.getElementById("score").innerHTML = "Score: " + score;
};

newLevel();
play();
