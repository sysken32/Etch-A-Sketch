var sketchGrid = document.querySelector('.boardGrid');
var gridSlider = document.querySelector('#rangeSlider');
var gridItems = [];
var isMouseDown = false;
var gridRows = 16;
var gridCols = 16;

var makeRows = function(rows, cols) {
  sketchGrid.innerHTML = "";
  sketchGrid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  sketchGrid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  gridItems = [];

  for (var i = 0; i < rows * cols; i++) {
    var cell = document.createElement('div');
    sketchGrid.appendChild(cell).className = "grid-item";
    gridItems.push(cell);

    cell.addEventListener("click", handleGridItemClick);
    cell.addEventListener("mousedown", handleGridItemMouseDown);
    cell.addEventListener("mouseover", handleGridItemMouseOver);
  }
};


// Button code below
var eraseActive = false;
var colorActive = false;
var currentColor = "black";

function handleGridItemClick(event) {
  if (eraseActive) {
    event.target.style.backgroundColor = "white";
  } else if (colorActive) {
    event.target.style.backgroundColor = currentColor;
  } else {
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
  currentColor = "black";
  let circleBackground = document.querySelector(".colorCircle");
  circleBackground.style.backgroundColor = currentColor;
  colorPicker.value = currentColor; // Update the color picker's value
}

function colorClick() {
  eraseActive = false;
  colorActive = true;
}

var resetClick = function() {
  for (var i = 0; i < gridItems.length; i++) {
    gridItems[i].style.backgroundColor = "white"; //styling the grid back to white
  }
};

let smallBtn = document.querySelector('.small');
let mediumBtn = document.querySelector('.medium');
let bigBtn = document.querySelector('.big');

var gridSizeSmall = function(){ //update function
  gridRows = 10;
  gridCols = 10;
  makeRows(gridRows, gridCols);
}
smallBtn.addEventListener("click", gridSizeSmall);

var gridSizeMedium = function(){
  gridRows = 16;
  gridCols = 16;
  makeRows(gridRows, gridCols);
}
mediumBtn.addEventListener("click", gridSizeMedium);

var gridSizeLarge = function(){
  gridRows = 24;
  gridCols = 24;
  makeRows(gridRows, gridCols);
}
bigBtn.addEventListener("click", gridSizeLarge); 

var colorPicker = document.getElementById('colorPick');

colorPicker.addEventListener("change", function() {
  currentColor = colorPicker.value;
  let circleBackground = document.querySelector(".colorCircle");
  circleBackground.style.backgroundColor = currentColor;
});

function circleColorBackground() { //code for circle under color button
  let circleBackground = document.querySelector(".colorCircle");
  circleBackground.style.backgroundColor = currentColor;
}

colorPicker.addEventListener("click", function() {
  currentColor = colorPicker.value;
  console.log("selected color is: ");
  circleColorBackground();
});

circleColorBackground();

document.querySelector(".color").addEventListener("click", colorClick);
document.querySelector(".eraser").addEventListener("click", eraseClick);
document.querySelector(".black").addEventListener("click", blackClick);
document.querySelector(".reset").addEventListener("click", resetClick);
document.querySelector(".colorCircle");

window.addEventListener("DOMContentLoaded", function() {
  var circleBackground = document.querySelector(".colorCircle");
  circleBackground.style.backgroundColor = currentColor;
});

colorPicker.addEventListener("input", function() {
  currentColor = colorPicker.value;
  circleColorBackground();
});

document.addEventListener("mouseup", function() {
  isMouseDown = false;
});

document.addEventListener("mousedown", function(event) {
  if (event.button === 0) {
    isMouseDown = true;
  }
});

function handleGridItemMouseDown(event) {
  if (isMouseDown) {
    handleGridItemClick(event);
  }
}

function handleGridItemMouseOver(event) {
  if (isMouseDown) {
    handleGridItemClick(event);
  }
}

makeRows(16,16);
