class Laser{
  constructor(ship){
    this.r = ship.r/5;
    this.pos = createVector(ship.pos.x,ship.pos.y);
    this.vel = createVector(0,-20);
  }

  render() {
    rectMode(CENTER);
    fill(0,255,0);
    stroke(255,150);
    rect(this.pos.x,this.pos.y-ship.r*(2/3),this.r,this.r,1);
  }
  move(){
    this.pos.add(this.vel);
  }
}

class Laser1 extends Laser{
  constructor(ship){
    super(ship);
    this.posn=[createVector(ship.pos.x,ship.pos.y)];
  }
  render(){
    fill(0,255,0);
    stroke(255,150);
    beginShape();
    vertex(this.pos.x-this.r/2,this.pos.y-ship.r*(2/3));
    vertex(this.pos.x,this.pos.y-2*this.r-ship.r*(2/3));
    vertex(this.pos.x+this.r/2,this.pos.y-ship.r*(2/3));
    vertex(this.pos.x,this.pos.y-this.r/3-ship.r*(2/3));
    endShape(CLOSE);
  }
}

class Laser2 extends Laser{
  constructor(ship){
    super(ship);
  }

  render(){
    fill(0,255,0);
    stroke(255,150);

    beginShape();
    vertex(this.pos.x-3*this.r/2,this.pos.y-ship.r*(2/3));
    vertex(this.pos.x-this.r,this.pos.y-2*this.r-ship.r*(2/3));
    vertex(this.pos.x-this.r+this.r/2,this.pos.y-ship.r*(2/3));
    vertex(this.pos.x-this.r,this.pos.y-this.r/3-ship.r*(2/3));
    endShape(CLOSE);

    beginShape();
    vertex(this.pos.x+this.r/2,this.pos.y-ship.r*(2/3));
    vertex(this.pos.x+this.r,this.pos.y-2*this.r-ship.r*(2/3));
    vertex(this.pos.x+3*this.r/2,this.pos.y-ship.r*(2/3));
    vertex(this.pos.x+this.r,this.pos.y-this.r/3-ship.r*(2/3));
    endShape(CLOSE);
  }
}

class Laser3 extends Laser{
  constructor(ship){
    super(ship);
  }
  render(){
    fill(0,255,0);
    stroke(255,150);

    beginShape();
    vertex(this.pos.x-5*this.r/2,this.pos.y-ship.r*(2/3));
    vertex(this.pos.x-2*this.r,this.pos.y-2*this.r-ship.r*(2/3));
    vertex(this.pos.x-3*this.r/2,this.pos.y-ship.r*(2/3));
    vertex(this.pos.x-2*this.r,this.pos.y-this.r/3-ship.r*(2/3));
    endShape(CLOSE);

    beginShape();
    vertex(this.pos.x-this.r/2,this.pos.y-ship.r*(2/3));
    vertex(this.pos.x,this.pos.y-2*this.r-ship.r*(2/3));
    vertex(this.pos.x+this.r/2,this.pos.y-ship.r*(2/3));
    vertex(this.pos.x,this.pos.y-this.r/3-ship.r*(2/3));
    endShape(CLOSE);

    beginShape();
    vertex(this.pos.x+3*this.r/2,this.pos.y-ship.r*(2/3));
    vertex(this.pos.x+2*this.r,this.pos.y-2*this.r-ship.r*(2/3));
    vertex(this.pos.x+5*this.r/2,this.pos.y-ship.r*(2/3));
    vertex(this.pos.x+2*this.r,this.pos.y-this.r/3-ship.r*(2/3));
    endShape(CLOSE);
  }
}