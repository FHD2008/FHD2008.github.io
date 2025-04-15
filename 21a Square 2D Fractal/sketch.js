// Square Fractal
// Fahad Hussain
// 15-4-2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER );
}

function draw() {
  background(220);
  randomSeed(1)
  squareFractal(width/2, height/2, height/2);
}

function squareFractal(x,y,sideLength){
  fill(random(255),random(255),random(255),100)
  noStroke();
  square(x,y,sideLength);

  if (sideLength > 10){
    squareFractal(x-sideLength/2, y-sideLength/2, sideLength/2);
    squareFractal(x-sideLength/2, y+sideLength/2, sideLength/2);
    squareFractal(x+sideLength/2, y-sideLength/2, sideLength/2);
    squareFractal(x+sideLength/2, y+sideLength/2, sideLength/2);
  }
}
