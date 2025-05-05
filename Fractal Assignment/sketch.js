// Creating Your Own Fractals
// Fahad Hussain
// 16-4-2025

let sizeSquare;
function setup() {
  createCanvas(windowWidth, windowHeight);
  sizeSquare = width;
  angleMode(DEGREES)
}

function draw() {
  background(220);
  noFill();
  drawFractals(0,0,20,sizeSquare);
}

function drawFractals(x,y,a,s){
  rectMode(CENTER)
  push()
  translate(width/2,height/2);
  rotate(a);
  square(x,y,s);
  pop();
  if(s > 10){
    drawFractals(x,y,a+5, s/1.1);
  }
}