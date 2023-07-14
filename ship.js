class Ship{

  constructor(){
    this.pos = createVector();
    this.r = 30;
  }

  render(){
    
    this.pos.x = mouseX;
    this.pos.y = height-20;

    if(this.pos.x > width-11)
      this.pos.x = width-11;
    if(this.pos.x < 11)
      this.pos.x = 11;
   // noFill();
    stroke('#EDA33B');
    strokeWeight(1.5);
    rectMode(CENTER);
    ellipse(this.pos.x,this.pos.y,3);
    noFill();
    rect(this.pos.x,this.pos.y,this.r,this.r,3);
    rect(this.pos.x,this.pos.y,this.r/2,this.r/2,2);
    stroke(0,255,0);
    triangle(this.pos.x-this.r/8,this.pos.y-this.r*(2/3),this.pos.x,this.pos.y-this.r,this.pos.x+this.r/8,this.pos.y-this.r*(2/3))
    //rect(this.pos.x,this.pos.y-this.r*(2/3),this.r/4,this.r/4,1);
  }
}