// Object Demo (Books)
// Fahad Hussain
// Mar 12, 2025

//1. Add two more book objects (each in a var)
//   and add to the shelf... (connected to my)
//   book.

// 2. Use a loop and an array to generate 20+
//    skinny books
//    (can be all named the same if needed)

let myBook;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // myBook = new Book("CS30 Text", "P.H.D. Maqluba",
  //   1234567891011, "leatherbound",
  //   1000, width*0.3, height*0.5, 200);
  // myBook.printOut();
  
  //Make 20 books in a row
  let x=50;
  let covers = ["softcover", "hardcover", "leatherbound"];
  for(let i = 0; i<20; i++){
    let choice = int(random(3));
  }
}

function draw() {
  background(220);
  drawTwentyBooks();
  myBook.display();
}

//Nice to organize class at the bottom...
class Book{
  //1. Constructor
  constructor(title, author, isbn, cover, pages, x, y, bookHeight){
    this.title = title;
    this.author = author;
    this.ISBN = isbn;
    this.cover = cover;
    this.pages = pages;
    this.x = x;
    this.y = y;
    this.bookHeight = bookHeight;

  }

  //2. Class methods
  display(){
    //render our book object on the canvas
    rectMode(CENTER); textAlign(CENTER, CENTER);
    textSize(20);

    switch(this.cover){
      case "softcover":
        fill(250,200,150); 
        break;
      case "hardcover":
        fill(120,255,255);
        break;
      case "leatherbound":
        fill(150,100,15);
        break;
    }

    rect(this.x, this.y, this.pages/10, this.bookHeight);
    fill(255);
    text(this.title[0], this.x, height/2 - 50);
  }

  printOut(){
    //print out data in a nice format
    print(this.title+", by " + this.author);
    print("Length: " + this.pages);
    print("ISBN: " + this.ISBN)
  }
}
// function drawTwentyBooks(){
//   let titles = ["A", "B", "C", "D", "E", "F", "G",
//                 "H", "I", "J", "K", "L", "M", "N",
//                 "O", "P", "Q", "R", "T", "S"]
//   for (let i in titles){
//     myBook = new Book(i, "idk", "#123", "hardcover", 500, i+50, height/2, 100);
//   }

// }