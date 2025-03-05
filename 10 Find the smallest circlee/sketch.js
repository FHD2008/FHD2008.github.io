// 10 Find the smallest circle
// Fahad Hussain
// March 6-2025

const NUM_CIRCLES = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateCircles();
}

function draw() {
  // background(220);
}

function generateCircles(){
  // draw NUM_CIRCLES circles with no fill
  // the smallest one will be filled with a color
  // variables to track smallest so far
  let smallestDiameter = Infinity;
  let smallX, smallY;

  noFill();
  for (let num = 0; num < NUM_CIRCLES; num++){
    // generates the next circle
    let x = random(0, width);
    let y = random(0, height);
    let d = random(20, 80);
    circle(x, y, d);

    //"is this the smallest circle so far?"
    if (d < smallestDiameter){
      smallestDiameter = d;
      smallX = x; smallY = y;

    }
  }
  fill(255,255,0);
  circle(smallX, smallY, smallestDiameter);
}