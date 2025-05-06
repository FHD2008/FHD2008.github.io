// Creating Your Own Fractals
// Fahad Hussain
// 16-4-2025

//Production rules:
//1. Draw square with side length of width of canvas ad its position at center and at 20 degrees angle
//2. Rotate the square by adding frameCount/10 to the angle
//3. With each new square called recusrively draw a square smaller by 1.1 times the previous square with different color
//4. Stop drawing when the side length of the square is less than 10

let sizeSquare;
function setup() {
  createCanvas(windowWidth, windowHeight);
  sizeSquare = width;
  angleMode(DEGREES)
}

function draw() {
  background(220);
  randomSeed(1);
  drawFractals(0,0,45,sizeSquare);
}

function drawFractals(x,y,a,s){
  rectMode(CENTER)
  fill(random(['grey', 'white']));
  push()
  translate(width/2,height/2);
  rotate(a);
  square(x,y,s,10);
  pop();
  if(s > 10){
    drawFractals(x,y,a+frameCount/10, s/1.1);
  }
}