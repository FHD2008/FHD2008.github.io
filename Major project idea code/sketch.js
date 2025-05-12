let player;
let obstacles = [];

function setup() {
  createCanvas(800, 400);
  player = new Player();
}

function draw() {
  background(200);
  
  player.update();
  player.draw();
  
  // Generate new obstacles
  if (frameCount % 60 === 0) {
    obstacles.push(new Obstacle());
  }
  
  // Update and draw obstacles
  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].update();
    obstacles[i].draw();
    
    // Remove obstacles when they go offscreen
    if (obstacles[i].offscreen()) {
      obstacles.splice(i, 1);
    }
  }
  
  // Collision detection (basic)
  for (let obs of obstacles) {
    if (player.x < obs.x + obs.width && player.x + player.size > obs.x &&
        player.y < obs.y + obs.height && player.y + player.size > obs.y) {
      console.log("Game Over!");
      noLoop(); // Stops the game
    }
  }
}

function keyPressed() {
  if (key === ' ') {  // Space key for jump
    player.jump();
  }
}

class Player {
  constructor() {
    this.x = 50;
    this.y = height - 50; // On the ground
    this.size = 40;
    this.velocity = 0;
    this.gravity = 0.5;
    this.lift = -12;
    this.isGrounded = true;
  }

  jump() {
    if(this.isGrounded){
      this.velocity = this.lift;
      this.isGrounded = false;
    }
     // Apply upward force
  }

  update() {
    this.velocity += this.gravity;  // Apply gravity
    this.y += this.velocity;        // Move player by velocity
    if (this.y > height - this.size) { // Prevent falling below ground
      this.y = height - this.size;
      this.velocity = 0;
      this.isGrounded = true;
    }
  }

  draw() {
    fill(0, 0, 255);
    rect(this.x, this.y, this.size, this.size);
  }
}

class Obstacle {
  constructor() {
    this.x = width;
    this.y = height - 40;  // Place at ground level
    this.width = 30;
    this.height = 40;
    this.speed = 4;
  }

  update() {
    this.x -= this.speed;  // Move the obstacle to the left
  }

  draw() {
    fill(255, 0, 0);
    rect(this.x, this.y, this.width, this.height);
  }

  offscreen() {
    return this.x < -this.width;  // Returns true if the obstacle is off-screen
  }
}
