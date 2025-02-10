// Drawing with shapes practice
// Fahad Hussain
// 10-2-2024

// Global variable declarations
let boxX = 200, boxY = 100;
let refPointX, refPointY;

function setup() {
  createCanvas(700, 700);
  refPointX = width * 0.5;
  refPointY = height * 0.5;
}

function draw() {
  background(100);
  fill("green"); 
  textSize(20);
  text(mouseX + "," + mouseY, mouseX, mouseY);
  drawCharacter();
  //drawBox();
  if(keyIsDown(LEFT_ARROW)){
    refPointX -= 5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    refPointX += 5;
  }
  if(keyIsDown(UP_ARROW)){
    refPointY -= 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    refPointY += 5;
  }
}

function drawCharacter(){
  
  fill(151,252,151);
  noStroke();
  //head
  circle(refPointX, refPointY, 50);
  //body
  rect(refPointX - 25, refPointY, 50, 30);
  //left leg
  rect(refPointX-25, refPointY+25, 5, 20);
  //right leg
  rect(refPointX+20, refPointY+25, 5, 20);
  //eyes
  fill("black");
  circle(refPointX-10, refPointY, 5);
  circle(refPointX+10, refPointY, 5);
  //mouth
  fill("black");
  rect(refPointX-10, refPointY+15, 20, 3);
  
}













// function drawBox() {
//   // draw a box on the screen
//   fill('turquoise');
//   rect(boxX, boxY, 50, 30, 5, 5, 0, 0);
//   rect(boxX, boxY - 50, 30);
// }

// function keyPressed(){
//   if(key ==="a"){
//     boxX = 0;
//   }
//   if(key ==="d"){
//     boxY = 400;
//   }
//   if(keyCode === BACKSPACE){
//     boxX = width * .85; // 85% across the screen
//     boxY = height * .6; // 60% down the screen
//   }
// }