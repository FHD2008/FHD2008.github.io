// Round Racers
// Fahad Hussain
// 17-3-2025
// Make three circles using class and objects and make them race accros the canvas

let roundRacerOne; let roundRacerTwo; let roundRacerThree; 

function setup() {
  createCanvas(windowWidth, 600);
  roundRacerOne = new RoundRacer(height/3, "red");
  roundRacerTwo = new RoundRacer(height/2, "green");
  roundRacerThree = new RoundRacer(400, "yellow");
}

function draw() {
  background(22);
  roundRacerOne.display();
  roundRacerOne.move();
  roundRacerTwo.display();
  roundRacerTwo.move();
  roundRacerThree.display();
  roundRacerThree.move();

}

class RoundRacer{
  constructor(yPos, color){
    this.yPos = yPos;
    this.color = color;
    this.xPos = 0
    this.xSpeed = random(3,15);

  }
  move(){
    this.xPos += this.xSpeed;
    if(this.xPos >= width){
      this.xPos = 0;
      this.xSpeed = random(3,15);
    }
  }
  
  display(){
    fill(this.color);
    circle(this.xPos, this.yPos, 20);
    }

  }
