class Powerup{
  constructor(){
    this.r = 4;
    this.a = 20;
    this.rot = 0;
    this.pos = createVector(random(27,width-27),random(-10,-900));
    this.vel = createVector(random(-1,1),random(2,5));
    this.acc = createVector();
  }

  render(){
    stroke(255);
    noFill();
    triangle(this.pos.x-this.a/2,this.pos.y+this.a*sin(PI/3)/3,this.pos.x,this.pos.y-this.a*(2*sin(PI/3))/3,this.pos.x+this.a/2,this.pos.y+this.a*sin(PI/3)/3);
    ellipse(this.pos.x+this.a*cos(this.rot),this.pos.y+this.a*sin(this.rot),this.r);
    ellipse(this.pos.x+this.a*cos(this.rot+2*PI/3),this.pos.y+this.a*sin(this.rot+2*PI/3),this.r);
    ellipse(this.pos.x+this.a*cos(this.rot+4*PI/3),this.pos.y+this.a*sin(this.rot+4*PI/3),this.r);
  }

  move(){
    this.pos.add(this.vel);
    
    this.rot+=0.05;
  
      if(this.pos.x>width-this.r){
        this.vel.x*=-1;
      }
      if(this.pos.x<this.r){
        this.vel.x*=-1;
      }
  }
}