// Starter code for our
// Terrain Generation Project
// Fahad Hussain
// March 3rd, 2025

let rectWidth = 25;
let noiseStart = 5;
let noiseTime;
let noiseSpeed = 0.1;
let heightLimit;

function setup() {
  createCanvas(windowWidth, windowHeight);
  heightLimit = windowHeight-50;
  noiseSpeed = random(0.01, 0.06);
  noiseTime = noiseStart;
  drawTerrain();
}

function drawTerrain(){
  // use loop to generate and draw
  //several rectangles side to side
  // to look like some 2d terrain
  rectMode(CORNERS);

  for (let x=0; x<width; x+=rectWidth){
    //generate a random height.
    //change this from using random() to noise()
    //let rectHeight = random(50,500);
    let rectHeight = noise(noiseTime);
    rectHeight = map(rectHeight, 0,1, 50, heightLimit);
    rectHeight =  round(rectHeight);
    //calculate the other corner of our rectangle
    let x2= x+rectWidth;
    let y2 = height - rectHeight;

    rect(x,height,x2, y2);
    noiseTime += noiseSpeed;
  }

  rectMode(CORNER);
}

function draw() {
 drawFlag(100, 100);
 //text(mouseX + "," + mouseY + " " + mouseButton, mouseX, mouseY);
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
    if (rectWidth <= 10){
      rectWidth = 10;
    }
  }
  background(255);
  drawTerrain();
}

function drawFlag(x,y){
  rectMode(CORNERS);
}


