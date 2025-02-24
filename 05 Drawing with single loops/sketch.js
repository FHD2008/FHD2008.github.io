// 05 Drawing with single loop
// Fahad Hussain
// Feb 24th 2025


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  gradientBackground();
  circleLine();

  //screen gets updated here.
}

function gradientBackground(){
  //create a gradient to use as background
  let h = 1;

  //use a loop to draw vertical stack of rectangles
  for(let y = 0; y<height; y+=h){
    noStroke();
    let mappedY = map(y, 0, height, 0, 255);
    let reversedY = map(y, 0, height, 255, 0);
    fill(reversedY, mouseY/2, mouseX/3);
    rect(0, y, width, h);
  }

}

function circleLine(){
  //use a loop (for or while) to draw a line
  //of circles side by side
  let d = 40; //diameter of the circle
  let y = height/2;
  let xStart = 0;
  let xEnd = width;

  //use a loop to do the drawing
//RESULTS IN A SINGLE IMAGE. NO ANIMA
  for(let x = xStart; x <= xEnd; x+=d){
    //x: 0 40 80 120 160 200 240
    circle(x, y, d);
  }
}