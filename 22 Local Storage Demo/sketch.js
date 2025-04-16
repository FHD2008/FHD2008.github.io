// Local Storage Demo
// Fahad Hussain
// 16-4-2025

let x,y;
let xSpeed, ySpeed;
let totalBounces = 0;

function setup() {
  createCanvas(300, 200);
  x = width/2;  y= height/2;
  xSpeed = 5;   ySpeed = 3;
  if(localStorage.getItem("numBounces") === null){
    localStorage.setItem("numBounces",0);
  }
  else{
    totalBounces = localStorage.getItem("numBounces");
  }
  textSize(30); textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  updateBall();
  text(totalBounces, width/2, height/2);
}

function updateBall(){
  //calculate new position
  x+= xSpeed;  y+= ySpeed;

  //check for bounce
  if(x < 10 || x > width-10){
    xSpeed *= -1;
    totalBounces++;
    localStorage.setItem("numBounces", totalBounces);
  }

  if(y<10 || y > height-10){
    ySpeed *= -1;
    totalBounces++;
    localStorage.setItem("numBounces", totalBounces);
  }
  //draw circle
  circle(x,y,20);
}
