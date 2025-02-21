// Mountains Interactive Scene
// Fahad Hussain
// 11 Feb, 2025

// Variables

let refXchar = 350; // reference x postion of character    

let refYchar = 310; // reference y postion of character

let currentBack = 0; // it sets background color

let shirtColor = "purple";

let cloudShade;


function setup() {
  createCanvas(700, 450);  
}

function draw() {
  switch(currentBack){                 // changing bg color along with cloudshade with variable
    case 0:
      background(85,206,255);
      cloudShade = 236, 236, 236;        // original background
      break;
    case 1:
      background(250, 128, 114);
      cloudShade = 225, 229, 204;        // sunset 
      break;
    case 2:
      background(26, 27, 78);
      cloudShade = 143, 144, 189;        // night
      break;
    case 3:
      background(193, 203, 210);
      cloudShade = 115, 111, 112;        // cloudy
      break;
  }

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

  refXchar = mouseX-50; // moves the character horizontally with mouse
  refYchar = mouseY-50; // moves the character vertically with mouse
  if (refYchar <= 290){
    refYchar = 290;                   // setting boundary for character
  }
  if (refYchar >= height-40){
    refYchar = height-40;             // setting boundary for character
  }

  textSize(20);
  fill("black");
  text("Fahad Hussain", 20, 430);  // name 
}

// Functions for each object in the scene  ---> In each function, refX and refY are the reference points for the object.
                                                          
function drawGround() {       // Draws the ground           
  noStroke();                                                  
  fill("forestgreen")                                           
  rect(0, height-100, width, 100 );
  fill("black");
  rect(0, height-100, width, 5);
}
function drawMount() {        // Draws the mountains using triangles with different shades 
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
function drawTree(x,y,s) {       // Draws the trees using rectangle for trunk and circle for top
  let refX = x;   
  let refY = y;   
  let scale = s;  
  // tree top
  fill(0, 150, 50);
  circle(refX, refY, 70*scale);
  // tree trunk
  fill("brown");
  rect(refX-10*scale, refY+20*scale, 20*scale, 60*scale);
  circle(refX, refY+10*scale, 30*scale);
}

function drawClouds(x, y){    // draws clouds using circles and rectangle
  let refX = x; 
  let refY = y;  
  noStroke();
  fill(cloudShade);      
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
function drawCharacter(){    // Draws the character
  //chest
  stroke("black");
  fill(shirtColor);
  rect(refXchar, refYchar, 20, 40);
  //head
  fill(247, 177, 102);
  circle(refXchar+10, refYchar-15, 20);
  // right arm
  fill("white");
  rect(refXchar+20, refYchar+5, 5, 30);
  // left arm
  rect(refXchar-5, refYchar+5, 5, 30);
  // right leg
  fill("purple");
  rect(refXchar+15, refYchar+40, 5, 40);
  // left leg
  rect(refXchar, refYchar+40, 5, 40);
}

// Input for changing shirt color

function keyPressed(){             

  if (keyCode === 82){   // r key changes the color to red
    shirtColor = "red";
  }
  if (keyCode === 66){  // b key changes the color to blue
    shirtColor = "blue";
  }
  if (keyCode === 71){  // g key changes the color to green
    shirtColor = "green";
  }
  if (keyCode === 89){  // y key changes the color to yellow
    shirtColor = "yellow";
  }
  if (keyCode === 80){
    shirtColor = "pink";
  }
  if (keyCode === 79){  // o key changes the color to orange
    shirtColor = "orange";
  }
  if (keyCode === 32){   // space key resets to original color
    shirtColor = "purple";
  }
}

// Input for changing background color

function mousePressed(){
  if (mouseButton === CENTER){  // changes the background color on middle button press
    currentBack+= 1;
  }
  if (currentBack > 3){         // resets the background color
    currentBack = 0;
  }
}
