var squarenum = 6;
var colors = randomColorGenerator(squarenum);


var squares = document.querySelectorAll(".square");
var targetColor = pickrandomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var refreshButton = document.querySelector("#refresh");
var squarenum = 6;
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function(){
  hard.classList.remove("isSelected");
  easy.classList.add("isSelected");
  squarenum = 3;
  colors = randomColorGenerator(squarenum);
  targetColor = pickrandomColor();
  colorDisplay.textContent = targetColor;
  for(var i = 0; i <squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } else{
      squares[i].style.display = "none";
    }
  }
})

hard.addEventListener("click", function(){
  easy.classList.remove("isSelected");
  hard.classList.add("isSelected");
  squarenum = 6;
  colors = randomColorGenerator(squarenum);
  targetColor = pickrandomColor();
  colorDisplay.textContent = targetColor;
  for(var i = 0; i <squares.length; i++){
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
  }
})

refreshButton.addEventListener("click", function(){
  //makes new colors, loops through array of new colors and changes the color of the squares
  colors = randomColorGenerator(squarenum);
  targetColor = pickrandomColor();
  colorDisplay.textContent = targetColor;
  
  messageDisplay.textContent = "";
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.background = "#FED017";
})
colorDisplay.textContent = targetColor;

for(var i = 0; i < squares.length; i++){
  //adds the starting colors for each square
  squares[i].style.backgroundColor = colors[i];

  //changes the colors of the square when clicked on
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    console.log(clickedColor, targetColor);
    //comparing the color that is clicked on to the color presented in the heading
    if(clickedColor === targetColor) {
      messageDisplay.textContent = "Correct!";
      refreshButton.textContent = "Play Again!!";
      tileColorChange(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else{
        this.style.backgroundColor = "#FEEDAA";
        messageDisplay.textContent = "Try Again";
    }
  });
}

function tileColorChange(color){
  //loop through all the tiles and change the color to the same color as the correct tile choice
  for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickrandomColor(){
  //pick a random number
  var randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
}

function randomColor(){
  //choose RBG from 0-255
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function randomColorGenerator(num){
  //makes random colors and adds to array
  var arr = [];
  for (var i=0; i < num; i++) { //put random color into array
    arr.push(randomColor());
  }
  return arr;

}
