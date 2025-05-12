//parent class ("super class")
class AnimateObject{
    constructor(x,y){
      this.x = x;   this.y = y;
      this.size = 1;
    }
    move(){ //add a "wiggle effect";
      this.x += random(-2,2);
      this.y += random(-2,2);
    }
    display(){
      strokeWeight(6);
      point(this.x, this.y);
    }
  }
  
  