// Warm Up Exercises:
// 1. Summing an Array
// 2. Drawing with loops practice

let a = [22, 11, 5, 5, 90, 80, 70, 60]
//        0  1   2  3  4    5   6   7 
// a.length is 8

function setup() {
  createCanvas(400, 400);
  background(220);
  //TASK 1: Add up all the values in our array
  //        and display the total in the console
  let total = 0;

for (let currentNumber of a){
  total += currentNumber;
}
  // for (let i = 0; i < a.length; i++) {
  //   total += a[i];
  // }
  print(total);
}

function draw() {
  fill(255, 0, 0);
  drawCircleCross();
}


function drawCircleCross(){
  // let x = 0;
  // let yOne = 0;
  // let d = 20;
  // let yTwo = 400;
  // circle(x, yOne, d);
  // for (let i = 0; i < width; i++){
  //   x += 40;
  //   yOne += 40;
  //   circle(x, yOne, d);
  // }
  // x = 0;
  // circle(x, yTwo, d);
  // for (let i = 0; i < width; i++){
  //   x += 40;
  //   yTwo -= 40;
  //   circle(x, yTwo, d);
  // }
  for(let x = 0; x <= width; x+= width/10){
    circle(x,x,20);
    circle(x, height-x,20);
  }
}