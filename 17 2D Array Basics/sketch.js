// 2D Array Basics
// Fahad Hussain
// April 3,2025
// Working with 2D Arrays, Visualizations

let grid =
[ [0,    60, 120, 180, 240],
  [240, 180, 120,  60,  0 ],
  [0,   200,  0,  200,  0 ]
];

let squareSize = 60;
const NUM_ROWS = 3;   const NUM_COLS = 5;

function setup() {
  createCanvas(NUM_COLS*squareSize, NUM_ROWS*squareSize);
}

function renderGrid(){
  //interpret the info in  the 2D array, and draw
  //a grid of colors on the screen to reflect it.
  for(let y=0; y< NUM_ROWS; y++){
    for(let x =0; x<NUM_COLS; x++){
      let fillColor = (grid[y][x]);
      fill(fillColor);
      square(x*squareSize, y*squareSize, squareSize);
    }
  }
}

function draw() {
  background(220);
  renderGrid();
}
