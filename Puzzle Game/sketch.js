// Puzzle game
// Fahad Hussain
// 7-4-2025
//Make a game where the user has to flip all tiles and make it
// same color either all black or all white.


let sqPttrn = 0;   //set square pattern to off
let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0,0,0,0,0],
                [0,0,0,0,0],
                [0,255,0,0,0],
                [255,255,255,0,0]];



function setup() {
  createCanvas(windowWidth, windowHeight);
  randomGrid(); 
  rectWidth = width/NUM_COLS;      // sizes of rectangles according to number of columns and rows
  rectHeight = height/NUM_ROWS;
}

function draw() {
  background(220);
  determineActiveSquare();   //determine which tile the mouse cursor is on
  drawGrid();                //draws the grid board on screen
  if (checkForWin() === true){
    fill("Green");
    textSize(75);                     //→→→→  Victory text for win
    textAlign(CENTER);
    textFont("Times New Roman");
    text("YOU WIN!!!", width/2, height/2);
  }
  cursorOverlay()
 
}

function keyPressed(){       //function checks for space bar pressed
  if(keyCode === 32){
    if(sqPttrn === 0){       //if spacebar pressed the sqPttrn turns on, if it's already on it turns off (1 for on and 0 for off)
      sqPttrn = 1;       
    }
    else if(sqPttrn === 1){
      sqPttrn = 0;
    }
    
  }
}



function mousePressed(){ //flips the tiles in the shape preferred when mouse pressed
  if(keyIsDown(SHIFT)){         //for cheater function, only flips the tile mouse is on
    flip(currentCol, currentRow);
  }
  else if (sqPttrn === 1){     //flips tiles in sqPttrn 
    flip(currentCol, currentRow)
    flip(currentCol+1, currentRow);
    flip(currentCol+1, currentRow+1);
    flip(currentCol, currentRow+1);
  }
  else{                         //flips the current tile as well as the four in each direction around it(cross pattern)
    flip(currentCol, currentRow)
    flip(currentCol-1, currentRow);
    flip(currentCol+1, currentRow);
    flip(currentCol, currentRow-1);
    flip(currentCol, currentRow+1);
  }
  
}

function flip(col, row){ //flip the tiles in columns and rows flip from 0 to 255 or 255 to 0.
  
  if (col >= 0 && col < NUM_COLS ){
    if (row >= 0 && row < NUM_ROWS){
      if (gridData[row][col] === 0) gridData[row][col] = 255;
      else gridData[row][col] = 0;
    }
  }
}

function determineActiveSquare(){    // check location of mouse and which sqaure it's on.
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
  
  
}

function drawGrid(){
  //draws grid of squares from the data in 2d array
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      fill(gridData[y][x]); 
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}

function checkForWin(){    //checks if the user won the game by getting all the squares same color (white)
  let allSqBlack = true;
  let allSqWhite = true;
  for (let y = 0; y < NUM_ROWS ; y++){
    for (let x = 0; x < NUM_COLS; x++){
      if((gridData[y][x] !== 255)){   
        allSqWhite = false;
      }
      if((gridData[y][x] !== 0)){
        allSqBlack = false;
      }
    }
  }
  return allSqBlack || allSqWhite;   // returns true for win either all tiles are black or all are white
}

function randomGrid(){      // generates a random grid each time program starts
  for (let y = 0; y < NUM_ROWS ; y++){
    for (let x = 0; x < NUM_COLS; x++){
      gridData[y][x] = random([0, 255]);
    }
  }
}

function cursorOverlay(){     //creates green overlay on the squares being affected by mouse click
  fill(144,238,144, 150);
  if (checkForWin() !== true){  //ensures the overlay seen only when game is in action not when won
    if (keyIsDown(SHIFT)){  //only have overlay on current square cursor is on
      rect(currentCol*rectWidth, currentRow*rectHeight, rectWidth, rectHeight);
    }
    else if (sqPttrn === 1){   //overlay in the square pattern 
      rect(currentCol*rectWidth, currentRow*rectHeight, rectWidth, rectHeight);
      rect((currentCol+1)*rectWidth, currentRow*rectHeight, rectWidth, rectHeight);
      rect((currentCol+1)*rectWidth, (currentRow+1)*rectHeight, rectWidth, rectHeight);
      rect(currentCol*rectWidth, (currentRow+1)*rectHeight, rectWidth, rectHeight);
    }
    else{ //overlay on every square going to be affected by mouse click (cross pattern)
      rect(currentCol*rectWidth, currentRow*rectHeight, rectWidth, rectHeight);
      rect((currentCol+1)*rectWidth, currentRow*rectHeight, rectWidth, rectHeight);
      rect((currentCol-1)*rectWidth, currentRow*rectHeight, rectWidth, rectHeight);
      rect(currentCol*rectWidth, (currentRow+1)*rectHeight, rectWidth, rectHeight);
      rect(currentCol*rectWidth, (currentRow-1)*rectHeight, rectWidth, rectHeight);
    }
  }
  
}

