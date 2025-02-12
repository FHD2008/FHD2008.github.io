// Interactive Scene
// Fahad Hussain
// 11 Feb, 2025
// Make an interactive 2d scene with simple shapes and include interaction with user.


function setup() {
  createCanvas(700, 450);
}

function draw() {
  background("skyblue");
  strokeWeight(5)
  drawGround();
  drawMount();
  drawTree(65, 270, 1);
  drawTree(635, 270, 0.5);
  fill("red");
  text(mouseX + ", " + mouseY, mouseX, mouseY);
}

function drawGround() {       // Draws the ground
  fill("green")
  rect(0, height-100, width, 100 );
  fill("black");
  rect(0, height-100, width, 5);
}
function drawMount() {        // Draws the mountains
  noStroke();
  fill(190, 190, 190);
  triangle(30, 350, 130, 100, 130, 350);
  fill(170, 170, 170);
  triangle(130, 350, 130, 100, 230, 350);
  triangle(180, 350, 230, 235, 280, 350);
  fill(190, 190, 190);
  triangle(490, 350, 600, 150, 600, 350);
  fill(170, 170, 170);
  triangle(600, 350, 600, 150, 700, 350);
  triangle(550, 350, 475, 200, 475, 350);
  fill(190, 190, 190);
  triangle(475, 350, 475, 200, 400, 350);      
}
function drawTree(x,y,s) {       // Draws the tree
  let refX = x;
  let refY = y;
  let scale = s;
  fill(0, 200, 50);
  circle(refX, refY, 70*scale);
  fill("brown");
  rect(refX-10*scale, refY+20*scale, 20*scale, 60*scale);
  circle(refX, refY+10*scale, 30*scale);


}