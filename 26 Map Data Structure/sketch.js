// Map Data Structure
// Fahad Hussain
// 26-5-2025

let textFile, img, rows, cols, grid, colorMap;

function preload(){
  textFile = loadStrings("Assets/info.txt")
  img = loadStrings("Assets/colorImage.txt")
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  //processText();

  //determine # of rows/cols
  rows = img.length;  cols = img[0].length;

  //create and populate the 2d array (grid)
  grid = [];
  for(let i = 0; i < rows; i++){
    grid.push([...img[i]])
  }

  //create a map of colors
  colorMap = new Map([
    ["b", "black"],
    ["w", "white"],
    ["r", "sienna"],
    ["l", "peru"],
    ["p", color(150,150,255)]
  ])

  renderGrid();
}

function renderGrid(){
  //calculate rectangle sizes
  let cellWidth = width/cols;
  let cellHeight = height/rows;

  //visit each spot in 2d array, and visualize
  for(let x = 0; x < cols; x++){
    for(let y = 0; y < rows; y++){
      let currentKey = grid[y][x];
      fill(colorMap.get(currentKey));
      rect(x*cellWidth, y*cellHeight,cellWidth, cellHeight);
    }
  }
}

function draw(){
  //background(220)
}

function processText(){
  print("Split Into Words");
  let splitWords = textFile[0].split(" ");
  print(splitWords);

  print("Split Into Characters");
  let splitChars = textFile[1].split(" ");
  print(splitChars)

  print("Spread Into Characters");
  let spreadChars = [...textFile[2]]
  print(spreadChars)
}