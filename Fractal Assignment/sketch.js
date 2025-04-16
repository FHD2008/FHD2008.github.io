// Creating Your Own Fractals
// Fahad Hussain
// 16-4-2025

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
}

function draw() {
  background(220);
  diamondFractals(width/2, height/2, width/2, 45);
}

function diamondFractals(x,y,s, a){
  noFill();
  rectMode(CENTER);
  push();
  translate(x, y);
  rotate(a);
  square(0, 0, s);
  pop();
  if (s > 5){
    diamondFractals(x+s/2, y-s/2, s*0.7, a+5);
    diamondFractals(x-s/2, y-s/2, s*0.7, a-5);
  }
  
}