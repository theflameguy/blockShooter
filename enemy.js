//circular-enemies
class Enemy{

  constructor(){
    this.r = random(17,27);
    this.health = 5;
    this.freq = 30; 
    this.pos = createVector(random(27,width-27),random(-10,-900));
    this.vel = createVector(random(-1,1),random(2,5));
    this.acc = createVector();
  }
  
  render(){
    let r = map(this.health,0,5,0,255);
    let g = map(this.health,0,5,0,255);
    let b = map(this.health,0,5,0,255);
    fill(r,0,b);
    stroke(255);
      ellipse(this.pos.x,this.pos.y,this.r);
    }
  move(){
      this.pos.add(this.vel);
  
      if(this.pos.x>width-this.r){
        this.vel.x*=-1;
      }
      if(this.pos.x<this.r){
        this.vel.x*=-1;
      }
    }
}
//rect-enemies
class Enemy1 extends Enemy{
  
  constructor(){
    super();
    this.health = 1;
    this.freq = 60;
  }

  render(){
    stroke(255,0,255);
    noFill();
    rectMode(CENTER);
    rect(this.pos.x,this.pos.y,this.r,this.r);
  }

}
//diamond-enemies
class Enemy2 extends Enemy{
  
  constructor(){
    super();
    this.health = 2;
    this.freq = 120;
  }

  render(){
    let r = map(this.health,0,2,0,255);
    let g = map(this.health,0,2,0,255);
    let b = map(this.health,0,2,0,255);
    fill(r,0,b);
    stroke(255);
    //noFill();
    beginShape();
    vertex(this.pos.x-this.r/2,this.pos.y);
    vertex(this.pos.x,this.pos.y-2*this.r/3);
    vertex(this.pos.x+this.r/2,this.pos.y);
    vertex(this.pos.x,this.pos.y+2*this.r/3);
    endShape(CLOSE);
  }

}
//Hex-enemies
class Enemy3 extends Enemy{
  
  constructor(){
    super();
    this.health = 3;
    this.freq = 240;
  }

  render(){
    let r = map(this.health,0,2,0,255);
    let g = map(this.health,0,2,0,255);
    let b = map(this.health,0,2,0,255);
    fill(0,g,b);
    stroke(255);
    //noFill();
    beginShape();
    vertex(this.pos.x-this.r/2,this.pos.y);
    vertex(this.pos.x-this.r*cos(PI/3)/2,this.pos.y-this.r*sin(PI/3)/2);
    vertex(this.pos.x+this.r*cos(PI/3)/2,this.pos.y-this.r*sin(PI/3)/2);
    vertex(this.pos.x+this.r/2,this.pos.y);
    vertex(this.pos.x+this.r*cos(PI/3)/2,this.pos.y+this.r*sin(PI/3)/2);
    vertex(this.pos.x-this.r*cos(PI/3)/2,this.pos.y+this.r*sin(PI/3)/2);
    endShape(CLOSE);
  }

}