// Planets and moons (objects within objects)
// Fahad Hussain
// 19-3-2025
// Storing objects in objects, overwriting objects, basic transformations

let myPlanet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width/2, height/2);
}

function draw() {
  background(70);
  myPlanet.display();
}

function mousePressed(){
  //mouseClicked() → behaves differently in certain browsers
  if(keyIsPressed && keyCode === SHIFT){
    myPlanet = new Planet(mouseX, mouseY)
  }
  else{
    myPlanet.createMoon();
  }

}

function keyPressed(){
  //if any key (other than SHIFT) is pressed...
  if(keyCode !== SHIFT){
    myPlanet.relocate(mouseX, mouseY);
  }
}

class Planet{
  //1. COnstructor
  constructor(x, y){
    this.x = x; this.y = y; this.s = 100;
    this.moons= [];
  }
  //class functions
  display(){
    //draw the planet + all the moons
    circle(this.x, this.y, this.s);

    for(let m of this.moons){
      m.update();
    }
  }

  relocate(x,y){
    //First, the planet:
    this.x = x; this.y = y;
    //Then the moons:
    for (let m of this.moons){
      m.x = x;  m.y = y;
    }
  }

  createMoon(){
    this.moons.push(new Moon(this.x, this.y));
  }
}

class Moon{
  constructor(x,y){
    this.x =x; this.y = y; this.speed = 2;
    this.angle = 0; this.orbitRadius = random(80,250); this.s = random(5,40);
  }
  update(){
    //handles all internal class function calls
    this.move();
    this.display();
  }

  move(){
    this.angle += this.speed;
  }

  display(){
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    circle(this.orbitRadius, 0, this.s);
    pop();
  }
}
