// Classes and objects (random walkers)
// Fahad Hussain
// 14-3-2025
// first look at working with multiple objects

let singleWalker;
let walkers = [];
const NUM_WALKERS = 1000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  singleWalker = new Walker(100, 150, "green");
  initWalkers();
  noStroke();
}

function initWalkers(){
  //create a bunch of walker objects, put in array
  for(let i = 0; i<NUM_WALKERS; i++){
    let c = color(random(255),random(255),random(255));
    let w = new Walker(random(width), random(height), c);
    walkers.push(w);
  }
}

function draw() {
  background(220);
  //singleWalker.display();
  //singleWalker.move();
  // for(let currentWalker of walkers){ //loop by item //but doesnt let remove any objects
  //   currentWalker.move();
  //   currentWalker.display();
  // }
  fill(100, 50, 255,50);
  circle(mouseX, mouseY, 60);

  for(let i =0; i<walkers.length; i++){
    let w = walkers[i];
    w.move();
    w.display();

    //Ask if the current object is close to the mouse
    if(dist(w.x, w.y, mouseX, mouseY)< 30){
      // to delete from an arbitrary point in array: splice()
      walkers.splice(i,1);
    }
  }
}

class Walker{
  //1. Constructor
  constructor(x,y,c){
    this.x = x; this.y = y; this.c= c;
    this.speed = random(2,10);
    this.size = 10;
  }

  //2. class methods
  display(){ //render the walker to the screen
    rectMode(CENTER);
    fill(this.c);
    circle(this.x, this.y, this.size);
  }

  move(){
    //equally likely chance of ↑ ↓ → ←
    let choice = floor(random(4)); //0 - 3.9999
    switch(choice){
      case 0: //LEFT
        this.x -= this.speed;  break;
      case 1:  //RIGHT
        this.x += this.speed;  break;
      case 2:  //UP
        this.y -= this.speed;  break;
      case 3: //DOWN
        this.y += this.speed;  break;
    }
  }
}
