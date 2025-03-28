// Cars Cars Cars
// Fahad Hussain
// March 21, Friday
// 

let car;
let trafficLight;
let eastBound=[];
let westBound= [];

function setup() { 
  createCanvas(windowWidth, windowHeight);
  trafficLight = new TrafficLight(width-100, 100);
  
  for (let i = 0; i<20; i++){
    eastBound.push(new Vehicle(0, random(height/4, height/2 -40)));
    westBound.push(new Vehicle(1, random(height/2, 3*height/4 - 40)));
  }
} 

function draw() {
  nFrame = 0;
  background(220);
  drawRoad();
  trafficLight.display();
  for (let i of eastBound){
    i.action();
  }
  for (let i of westBound){
    i.action();
  }

}

function mousePressed(){
  if (keyIsDown(SHIFT)){
    westBound.push(new Vehicle(1, random(height/2, 3*height/4 - 40)));
  }
  else{
    eastBound.push(new Vehicle(0, random(height/4, height/2 -40)));
  }
  
}





class Vehicle{
  //1. Constructor
  constructor(dir, y){
    this.x = random(width);
    this.y = y
    this.direction = dir;
    this.xSpeed = 5
    this.type = int(random(0,2));
    this.color = color(random(255), random(255), random(255));
  }
  //display function renders everything in the canvas
  display(){     
    let tireWidth = 10;
    if(this.type === 0){       //car
       fill(this.color);
       push();
       translate(this.x, this.y);
       if (this.direction === 0){
        scale(-1,1);
       }
       
       //body
       rect(0, 0, 70, 30, 5, 0, 0, 5);
       //roof
       rect(25, 2.5, 30, 25, 0,4,4,0);
       //windsheild
       fill("skyblue");
       rect(17, 3.5, 8, 23, 4, 0, 0, 4);
       fill(80, 80, 80);
       //wheels
       rect(7 , -2, tireWidth, 2);
       rect( 55, -2, tireWidth, 2);
       rect( 7,30, tireWidth, 2);
       rect( 55, 30, tireWidth, 2);
       //headlights
       fill("white");
       circle(2,  8, 3);
       circle(2, 22, 3);
       //tailligths
       fill("red");
       rect(0 + 67, 0 + 2, 2, 6, 5,0,0,0);
       rect(0+67, 0 + 22, 2, 6, 0,0,0,5);
       pop();
    }
    
    else if(this.type === 1){     //truck
       tireWidth = 10;
       fill(this.color);
       push();
       translate(this.x,this.y)
       if(this.direction === 0){
        scale(-1,1);
       }
       //body
       rect(0, 0, 70, 30, 3, 2, 2, 3);
       //roof
       fill("grey");
       rect(11, -2.5, 57, 35);
       //wheels
       
       //headlights
       fill("white");
       circle(0,  8, 3);
       circle(0, 22, 3);
       pop();
    }
  }
  //movement of cars and trucks
  move(){
    if (this.direction === 0){
      this.x += this.xSpeed;
    }
    if (this.direction === 1){
      this.x -= this.xSpeed
    }

  }
  // speeding up of vehicles
  speedUp(){
    if (this.xSpeed < 15){
      this.xSpeed += 1;
    }
  }
  //slowing down of vehicles
  speedDown(){
    if (this.xSpeed > 1){
      this.xSpeed -= 1;
    }
  }
  //the car changes color randomly 
  changeColor(){
    this.color = color(random(255), random(255), random(255));
  }

  action(){
    //
    this.display();
    //wrap around
    if (this.x < -60){
      this.x = width;
    }
    if (this.x > width+60){
      this.x = -60;
    }
    // calling the rest of the function with 1% chance
    if (random(100) < 1){
      this.speedUp();
    }
    if (random(100) < 1){
      this.speedDown();
    }
    if (random(100) < 1){
      this.changeColor();
    }
    //
    this.move();
  }


}

class TrafficLight{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.signalColor = "green";
  }

  display(){
    fill("black");
    rect(this.x, this.y, 28, 70, 4);
    fill(this.signalColor);
    if (this.signalColor === "green"){
      circle(this.x + 14, this.y+55, 20);
    }
    if (this.signalColor === "red"){
      circle(this.x + 14, this.y+15, 20);
    }
  }

  turnRed(){
    this.signalColor = "red";
  }
  turnGreen(){
    this.signalColor = "green";
  }

  action(){
    this.display()
  }
}

function drawRoad(){   //renders road
  fill(70);
  rect(0, height/4, width, height/2);
  for (let x = 0; x <= width; x += 45){  //loop to make separation line
    fill("Yellow");
    rect(x, height/2, 25, 5);
  }
}
