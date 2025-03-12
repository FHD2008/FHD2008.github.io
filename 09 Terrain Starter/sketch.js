// Terrain Generation Project
// Fahad Hussain
// March 3rd, 2025

let rectWidth = 20;
let rectHeight;
let noiseStart = 5;
let noiseTime;
let noiseSpeed = 0.01;
let heightLimit; //highest height of a rectangle on canvas
let averageHeight = 0;
let nRectangles = 0;     // number of rectangles
let totalHeight = 0;     //total height of all rectangles
let highestPeak;

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
  highestPeak = 0;
  let highX;
  for (let x=0; x<width; x+=rectWidth){
    rectHeight = noise(noiseTime);    //random number assigned to height of rectangle 
    rectHeight = map(rectHeight, 0, 1, 0, heightLimit);
    rectHeight =  round(rectHeight);
    //calculate the other corner of our rectangle
    let x2= x+rectWidth;
    let y2 = height - rectHeight;
    //variables to calculate avg height
    nRectangles++;
    totalHeight += rectHeight;
    //draw the rectangles
    rect(x,height,x2, y2);
    //check highest point
    if(rectHeight >  highestPeak){
      highestPeak = rectHeight;
      highX = x;
    }
    noiseTime += noiseSpeed;
  }
  rectMode(CORNER);
  drawFlag(highX, height - highestPeak);  //draw the flag on highest peak of terrain
  
}

function draw() {
  noiseTime = noiseStart;
  background(255);
  drawTerrain();
  calcAvgHeight()
  noiseStart += 0.01;  // creates the panning effect
  
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {    //increase width by 5 when right arrow pressed
    rectWidth += 5;
    if (rectWidth >= 100){
      rectWidth = 100;      //highest limit of width is 100
    }
  }
  else if (keyCode === LEFT_ARROW) { //decrease width by 5 when left arrow pressed
    rectWidth -= 5;
    if (rectWidth <= 5){
      rectWidth = 5;    //lowest width can be 5
    }
  }
  drawTerrain();
}

function drawFlag(x,y){     // draw flag using two rectangles
  let flagBaseWidth = 3
  let flagPoleHeight = 50
  //pole
  fill("GREY");
  rect(x-flagBaseWidth/2, y-flagPoleHeight, flagBaseWidth, flagPoleHeight);
  //flag
  fill("GREEN");
  rect(x-flagBaseWidth/2, y-flagPoleHeight, 20, 15);
}

function calcAvgHeight(){    //calculate avg height of the rectangles and draw a red band through the avg
  averageHeight = totalHeight/nRectangles;
  fill("RED");
  rect(0, height-averageHeight, width, 5);
}


