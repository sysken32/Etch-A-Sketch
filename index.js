var sketchGrid = document.querySelector('.boardGrid');
var gridSlider = document.querySelector('#rangeSlider')
var gridItems = [];

var makeRows = function(rows, cols) {
  sketchGrid.innerHTML = "";
  sketchGrid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  sketchGrid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  gridItems = [];

  for (var i = 0; i < rows * cols; i++) {
    var cell = document.createElement('div');
    sketchGrid.appendChild(cell).className = "grid-item";
    gridItems.push(cell);
  }
}

makeRows(16, 16);

//button code below
var gridItems = document.querySelectorAll('.grid-item');
var eraseActive = false;
var colorActive = false;
var currentColor = "white";

function handleGridItemClick(event) { //checks to see if eraser variable is true;
  if (eraseActive) {
    event.target.style.backgroundColor = "white";
  } 
  else if (colorActive){
    event.target.style.backgroundColor = currentColor;
  }
  else {
    event.target.style.backgroundColor = "black";
  }
}

function eraseClick() {
  eraseActive = true;
  colorActive = false;
}

function blackClick() {
  eraseActive = false;
  colorActive = false;
}

function colorClick(){
  eraseActive = false;
  colorActive = true;
}

for (let i = 0; i < gridItems.length; i++) {
  gridItems[i].addEventListener("click", handleGridItemClick);
}

var resetClick = function(){
  for(i=0; i< gridItems.length; i++){
    gridItems[i].style.backgroundColor = "white";
  }
}

var colorPicker = document.getElementById('colorPick');

colorPicker.addEventListener("change", function(){
  currentColor = colorPicker.value;
  circleColorBackground();
});

function circleColorBackground(){
  let circleBackground = document.querySelector(".colorCircle");
  circleBackground.style.backgroundColor = currentColor;
};

colorPicker.addEventListener("click", function(){
  currentColor = colorPicker.value;
  console.log("selected color is: ");
  circleColorBackground();
});

circleColorBackground();

document.querySelector(".color").addEventListener("click", colorClick);
document.querySelector(".eraser").addEventListener("click", eraseClick);
document.querySelector(".black").addEventListener("click", blackClick);
document.querySelector(".reset").addEventListener("click",resetClick);
document.querySelector(".colorCircle");
gridSlider.addEventListener("input",updateGrid);

window.addEventListener("DOMContentLoaded", function() {
  var circleBackground = document.querySelector(".colorCircle");
  circleBackground.style.backgroundColor = currentColor;
});

colorPicker.addEventListener("input", function(){
  currentColor = colorPicker.value;
  circleColorBackground();
})
