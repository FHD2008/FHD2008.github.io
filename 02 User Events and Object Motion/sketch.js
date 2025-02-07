// User Events
// Fahad Hussain
// Feb 7, 2025

// Global Variable Declarations
// Define your globals here
// You can only store simple/primitive data types
// at this point. (no system variables)
let tSize = 10;
let x; //declarataion only

function setup() {
  //runs once, right at the start
  createCanvas(windowWidth, windowHeight);
  x = width/2; //initialization, do in setup()
  rectMode(CENTER);
}

function draw(){
  // runs over and over, targetting 60 frames per second
  background(220);
  //print("Current Frame" + frameCount); //console.log
  
  //----- Mouse Section -----
  fill("green"); //fill/stroke can use color strings 
  textSize(tSize);
  text(mouseX + "," + mouseY + " " + mouseButton, mouseX, mouseY);

   //----- Keyboard Section -----
   fill(100, 200, 100);
   square(x, 200, 50, 5);
   
   if(keyIsDown(LEFT_ARROW)){
     x = x - 5;
     if (x < 0){
       x = width;
      }
   }
    if(keyIsDown(RIGHT_ARROW)){
      x = x + 5;
      if (x > width){
        x = 0;
      }
}
}
function mousePressed(){
  //this is called Automatically... do NOT call it
  //yourself.
  // This is called once PER MOUSE BUTTON PRESS
  tSize = random(5, 100);
}