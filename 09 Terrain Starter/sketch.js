// Starter code for our
// Terrain Generation Project
// Fahad Hussain
// March 3rd, 2025

let rectWidth = 25;
let rectHeight;
let noiseStart = 5;
let noiseTime;
let noiseSpeed = 0.01;
let heightLimit;
let averageHeight = 0;
let nRectangles = 0;     // number of rectangles
let totalHeight = 0;     //total height of all rectangles

function setup() {
  createCanvas(windowWidth, windowHeight);
  heightLimit = windowHeight-50;
}

function drawTerrain(){
  // use loop to generate and draw
  //several rectangles side to side
  // to look like some 2d terrain
  rectMode(CORNERS);
  fill("Black")
  nRectangles = 0;
  totalHeight = 0;
  for (let x=0; x<width; x+=rectWidth){
    rectHeight = noise(noiseTime);    //random number assigned to height of rectangle 
    rectHeight = map(rectHeight, 0, 1, 50, heightLimit);
    rectHeight =  round(rectHeight);
    //calculate the other corner of our rectangle
    let x2= x+rectWidth;
    let y2 = height - rectHeight;
    //variables to calculate avg height
    totalHeight += rectHeight;
    nRectangles++;
    //draw the rectangles
    rect(x,height,x2, y2);
    noiseTime += noiseSpeed;
  }

  rectMode(CORNER);
}

function draw() {
  noiseTime = noiseStart;
  background(255);
  drawFlag(100, 100);
  drawTerrain();
  calcAvgHeight()
  noiseStart += 0.02;
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    rectWidth += 5;
    if (rectWidth >= 100){
      rectWidth = 100;
    }
  }
  else if (keyCode === LEFT_ARROW) {
    rectWidth -= 5;
    if (rectWidth <= 5){
      rectWidth = 5;
    }
  }
  background(255);
  drawTerrain();
}

function drawFlag(x,y){
  let flagBottomWidth = 10;
  x = x - flagBottomWidth/2;

}

function calcAvgHeight(){
  averageHeight = totalHeight/nRectangles;
  rectMode(CORNERS);
  fill("RED");
  rect(0, height-averageHeight, width, (height-averageHeight)+10);
}


