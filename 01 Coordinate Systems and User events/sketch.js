// Coordinate System and User Events
// Fahad Hussain
// Feb 6th, 2025
// Not run to completion but interactive programs...

function setup() {
  // runs once, at the very beginning....
  createCanvas(400, 400);
                
}

function draw() {
  // draw LOOP, repeats forever....
  // - target of 60 frames per second
  // a new image is drawn at the bottom of the loop
  background(220);
  // twoCircles() // calls the function
  fiveCircles();

}


// function twoCircles(){
//   //draws two circles, one at a fixed location
//   //and one at the mouse location
//   fill(0, 255, 0); //green fill
//   stroke(0, 0, 255); //blue outline
//   strokeWeight(5); //thickness of line: 5 
//   circle(200, 100, 50);

//   noStroke(); // turns off outlines
//   fill(255, 0, 0); //red fill
//   circle(mouseX, mouseY, 30);
//   // secret calculated delay()
//   //screen updates at end of loop 
// }
function fiveCircles(){
  fill(0, 255, 0); //green fill
  stroke(0, 0, 255); //blue outline
  strokeWeight(5); //thickness of line: 5 
  circle(0, 0, 100);
  //
  fill(0, 255, 0); //green fill
  stroke(0, 0, 255); //blue outline
  strokeWeight(5); //thickness of line: 5 
  circle(0, height, 100);
  //
  fill(0, 255, 0); //green fill
  stroke(0, 0, 255); //blue outline
  strokeWeight(5); //thickness of line: 5 
  circle(width, height, 100);
  //
  fill(0, 255, 0); //green fill
  stroke(0, 0, 255); //blue outline
  strokeWeight(5); //thickness of line: 5 
  circle(width, 0, 100);
  //
  fill(0, 255, 0); //green fill
  stroke(0, 0, 255); //blue outline
  strokeWeight(5); //thickness of line: 5 
  circle(width/2, height/2, 100);
  
}