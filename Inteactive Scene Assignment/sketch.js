// Interactive Scene
// Fahad Hussain
// 11 Feb, 2025
// Make an interactive 2d scene with simple shapes and include interaction with user.


function setup() {
  createCanvas(700, 450);
}

function draw() {
  background("lightblue");
  drawGround();
}

function drawGround() {
  fill("green")
  strokeWeight(5)
  rect(0, height-100, width, 100 )
  strokeWeight()
}