// Cars Cars Cars
// Fahad Hussain
// March 21, Friday
// 

let car;

function setup() {
  createCanvas(windowWidth, windowHeight);
  car = new Vehicle(0);
}

function draw() {
  background(220);
  drawRoad();
  car.display();
}

class Vehicle{
  //1. Constructor
  constructor(dir){
    this.x = random(width);
    this.y;
    this.direction = dir;
    this.xspeed;
    this.type;
    this.color = color(random(255), random(255), random(255));
  }

  display(){
    this.x = width/2;
    this.y = 600;
    //if(this.type === 0){
      fill(this.color);
      rect(this.x, this.y, 70, 30);
      rect(this.x+20, this.y+8, 40, 15);
    //}
  }

  move(){

  }

  speedUp(){

  }

  speedDown(){

  }

  changeColor(){

  }

  action(){

  }


}

function drawRoad(){
  fill(70);
  rect(0, height/4, width, height/2);
  for (let x = 0; x <= width; x += 45){
    fill("Yellow");
    rect(x, height/2, 25, 5);
  }
}
