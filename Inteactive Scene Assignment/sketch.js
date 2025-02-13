// Interactive Scene
// Fahad Hussain
// 11 Feb, 2025
// Make an interactive 2d scene with simple shapes and include interaction with user.


function setup() {
  createCanvas(700, 450);
}

function draw() {
  background(85,206,255);       // bg color
  drawGround();
  drawMount();
  drawTree(65, 270, 1);
  drawTree(635, 310, 0.5);
  drawTree(550, 294, 0.7);
  drawTree(150, 310, 0.5);
  drawTree(220, 294, 0.7);
  drawClouds(500,50);
  drawClouds(300,100);
  drawClouds(100,50);
  drawCharacter();
  fill("red");
  text(mouseX + ", " + mouseY, mouseX, mouseY);
}

function drawGround() {       // Draws the ground
  rectMode(CORNER);
  fill("limegreen")
  rect(0, height-100, width, 100 );
  fill("black");
  rect(0, height-100, width, 5);
}
function drawMount() {        // Draws the mountains
  noStroke();
  // Mountains on left side of the scene
  fill(190, 190, 190);
  triangle(30, 350, 130, 100, 130, 350);
  fill(170, 170, 170);
  triangle(130, 350, 130, 100, 230, 350);
  triangle(180, 350, 230, 235, 280, 350);
  // Mountains on right side of the scene
  fill(190, 190, 190);
  triangle(490, 350, 600, 150, 600, 350);
  fill(170, 170, 170);
  triangle(600, 350, 600, 150, 700, 350);
  triangle(550, 350, 475, 200, 475, 350);
  fill(190, 190, 190);
  triangle(475, 350, 475, 200, 400, 350);      
}
function drawTree(x,y,s) {       // Draws the tree
  let refX = x;   // it sets the x postion of trees
  let refY = y;   // y position
  let scale = s;  // the size of the tree
  // tree top
  fill(0, 150, 50);
  circle(refX, refY, 70*scale);
  // tree trunk
  rectMode(CORNER);
  fill("brown");
  rect(refX-10*scale, refY+20*scale, 20*scale, 60*scale);
  circle(refX, refY+10*scale, 30*scale);
}

function drawClouds(x, y){    // draws clouds
  let refX = x;
  let refY = y;
  noStroke();
  fill(236, 236, 236);
  rectMode(CORNER)
  rect(refX, refY, 100, 10, 0, 0, 15, 5);
  circle(refX + 10, refY, 20);
  circle(refX + 20, refY-5, 20);
  circle(refX + 34, refY - 10, 25);
  circle(refX + 45, refY - 5, 20);
  circle(refX + 60, refY, 20);
  circle(refX + 70, refY-3, 20);
  circle(refX + 80, refY-5, 22);
  circle(refX + 90, refY, 20);    
}
function drawCharacter(){
  let refX = 350;
  let refY = 330;
  
}