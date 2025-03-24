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
    let tireWidth = 15;
    //if(this.type === 0){
      fill(this.color);
      //body
      rect(this.x, this.y, 70, 30, 5, 0, 0, 5);
      //roof
      rect(this.x+18, this.y+6, 40, 18);
      //windsheild
      fill("skyblue");
      rect(this.x + 7, this.y + 5, 10, 20, 5, 0, 0, 5);
      fill(80, 80, 80);
      //wheels
      rect(this.x+5 , this.y - 2, tireWidth, 2);
      rect(this.x + 50, this.y -2, tireWidth, 2);
      rect(this.x + 5, this.y + 30, tireWidth, 2);
      rect(this.x + 50, this.y + 30, tireWidth, 2);
      //headlights
      fill("white");
      circle(this.x, this.y + 8, 3);
      circle(this.x, this.y+22, 3);
      //tailligths
      fill("red");
      rect(this.x + 68, this.y + 5, 2, 8);
      rect(this.x+68, this.y + 18, 2, 8);
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
