// Cars Cars Cars
// Fahad Hussain
// March 21, Friday
// 

let car;
let eastBound=[];
let westBound= [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i = 0; i<20; i++){
    eastBound.push(new Vehicle(0, random(height/4, height/2 -40)));
  }
  for (let i = 0; i<20; i++){
    westBound.push(new Vehicle(1, random(height/2, 3*height/4 - 40)));
  }
}

function draw() {
  background(220);
  drawRoad();
  for (let i of eastBound){
    i.action();
  }
  for (let i of westBound){
    i.action();
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

  display(){
    let tireWidth = 10;
    if(this.type === 0){
       fill(this.color);
       push();
       translate(this.x, this.y);
       if (this.direction === 0){
        scale(-1,1);
       }
       
       //body
       rect(0, 0, 70, 30, 5, 0, 0, 5);
       //roof
       rect(0+25, 0+2.5, 30, 25, 0,4,4,0);
       //windsheild
       fill("skyblue");
       rect(0+17, 0 + 3.5, 8, 23, 4, 0, 0, 4);
       fill(80, 80, 80);
       //wheels
       rect(0+7 , 0 - 2, tireWidth, 2);
       rect(0 + 55, 0 -2, tireWidth, 2);
       rect(0 + 7, 0 + 30, tireWidth, 2);
       rect(0 + 55, 0 + 30, tireWidth, 2);
       //headlights
       fill("white");
       circle(0, 0 + 8, 3);
       circle(0, 0+22, 3);
       //tailligths
       fill("red");
       rect(0 + 67, 0 + 2, 2, 6, 5,0,0,0);
       rect(0+67, 0 + 22, 2, 6, 0,0,0,5);
       pop();
    }
    
    else if(this.type === 1){
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

  move(){
    if (this.direction === 0){
      this.x += this.xSpeed;
    }
    if (this.direction === 1){
      this.x -= this.xSpeed
    }

  }

  speedUp(){
    if (this.xSpeed < 15){
      this.xSpeed += 1;
    }
  }

  speedDown(){
    if (this.xSpeed > 1){
      this.xSpeed -= 1;
    }
  }

  changeColor(){
    this.color = color(random(255), random(255), random(255));
  }

  action(){
    this.display();
    
    if (this.x < -60){
      this.x = width;
    }
    if (this.x > width+60){
      this.x = -60;
    }
    if (random(100) < 1){
      this.speedUp();
    }
    if (random(100) < 1){
      this.speedDown();
    }
    if (random(100) < 1){
      this.changeColor();
    }
    this.move();


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
