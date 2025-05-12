// Inheritance and Code Across Multiple Files
// Fahad Hussain
// 12-5-2025

let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i=0; i<10; i++){
    objects.push(new AnimateObject(random(width), random(height)));
    objects.push(new circleObj(random(width), random(height)));
    objects.push(new LineObj());
  }
}

function draw() {
  background(220);
  for(let o of objects){
    o.move();
    o.display();
  }
}


