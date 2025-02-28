// State Variable Change
// Fahad & Rodney
// 27-2-2025


 let moveDirection = 0;
 let x = 0;
 let y = 0;
 let speed = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill("gray")
  rect(x, y, 50, 50);
  switch(moveDirection){
    case 0:
      x += speed;
      break;
    case 1:
      y += speed;
      break;
    case 2:
      x -= speed;
      break;
    case 3:
      y -= speed;
      break;
    case 4:
      x += speed;
  }
  if (x >= width - 50){
    moveDirection = 1;
  }
  if (y >=  height - 50){
    moveDirection = 2;
  }
  if (x <= 0){
    moveDirection = 3;
  }
  if ((y <= 0 && moveDirection === 3)){
    moveDirection = 4;
  }
}
