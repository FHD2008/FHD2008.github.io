//Refactor 1
//Fahad Hussain
// 11-3-2025




let x, y, speedX, speedY;

function setup() {
	createCanvas(windowWidth, windowHeight);
	x = 200; y = 300; speedX = random(3, 8); speedY = random(3, 8);
}
function draw() {
	bounceOffWall();
	background(80, 80, 80);
	rect(x, y, 250, 75);
}

function bounceOffWall() {
  //Gives the ability to make the rectangle randomly bounce
  //off the borders of canvas
	x += speedX; y += speedY;
  //changes direction to opposite with random speed and direction vertically
	if (y >= height - 75 || y <= 0){ 
		speedY = speedY * -1; 
	}
  //changes direction to opposite with random speed and direcction horizontally
	if (x >= width - 250 || x <= 0){
		 speedX = speedX * -1; 
	}
}