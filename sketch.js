var ship;
var enemy = [];
var laser = [];
var powerup = [];
var wait = 0;
var waitSet = 4;
var score = 0;
var enemyFreq = 30;  //more means less frequent
var isDed = 0;
var laserType=2;

var gameState=0; //0-menu 1-playing 2-over

function mouseClicked(){
  if(gameState==0)  gameState++;
  else if(gameState==1 && isDed==1) gameState++;
  else if(gameState==2) {gameState=0; score=0;}
}

function setup() {
  // put setup code here
  //createCanvas(1536,859.3);  //full scr
  createCanvas(window.innerWidth, window.innerHeight);  //test scr


  // localStorage.clear();

  ship = new Ship();
  if(!localStorage.getItem("highScore")){
    localStorage.setItem("highScore",0);
  }
  // for(var i=0;i<20;i++)
  // powerup.push(new Powerup);
}

function draw() {
  // put drawing code here

  background('#373B6E');
  frameRate(60)
  // console.log(floor(frameRate()));
  if(gameState==0){
    //menu-screen
    menuScreen();
    
  }
  if(gameState==1)
  {  // noLoop();
    // setTimeout(redraw, 10);

    ship.render();
    
    // score-board
    noStroke()
    fill(255)
    textSize(30)
    text(score,width-30,30,40,40)
    
    // for(var i=0;i<powerup.length;i++){
      //   powerup[i].render();
      //   powerup[i].move();
    // }
      
    //non-continous lasers
      wait++;
      wait%=enemyFreq;

    //shooting-laser adding
    if(mouseIsPressed && !(wait%waitSet) ) {
      let pos;
      if(laserType==0){
        pos = createVector(ship.pos.x,ship.pos.y);
        laser.push(new Laser(pos)); 
      }
      if(laserType==1){
        pos = createVector(ship.pos.x,ship.pos.y);
        pos.x-=ship.r/5;
        laser.push(new Laser(pos))
        pos.x+=(2*ship.r/5);
        laser.push(new Laser(pos));
      }
      if(laserType==2){
        pos = createVector(ship.pos.x,ship.pos.y);
        laser.push(new Laser(pos));
        pos.x-=(2*ship.r/5);
        laser.push(new Laser(pos));
        pos.x+=(4*ship.r/5);
        laser.push(new Laser(pos));
      }
    }

    //laser rendering and removing
    laserRender();
    
    //enemy rendering and removing
    enemyRender()

    //enemy incoming
    if(score >= 0){  
      if(!isDed && !(wait%enemyFreq) ){
        enemy.push(new Enemy3());
      }
    }
    if(score >=20){
      if(!isDed && !(wait%enemyFreq) ){
        enemy.push(new Enemy2());
      }
    }
    if(score >=30){
      if(!isDed && !(wait%enemyFreq) ){
        enemy.push(new Enemy());
      }
    }

    //enemy-laser collision check
    enemyLaserColl();

    //elemy-ship collision check
    enemyShipColl()

  }

  if(gameState==2){
    //death screen
    deathScreen();
  }
}


function menuScreen(){
  rectMode(CENTER);
  fill(200,60)
  stroke(255)
  rect(width/2,height/2,200,50)
  fill(255)
  textSize(20)
  noStroke();
  textAlign(CENTER);
  text("Click or Tap to Play",width/2,height/2+5)
}




function laserRender(){
  for(var i=0;i<laser.length;i++){
    laser[i].render();
    laser[i].move();
    if(laser[i].pos.y<0)
      laser.splice(i,1);
  }
}

function enemyRender(){
  for(var i=0;i<enemy.length;i++){
    enemy[i].render();
    enemy[i].move();

    if(enemy[i].pos.y>height)
      enemy.splice(i,1);
  }
}


function enemyShipColl(){
  for(let i=0;i<enemy.length;i++){
    var dis2;
    dis2=dist(ship.pos.x,ship.pos.y,enemy[i].pos.x,enemy[i].pos.y);
    if(dis2<(ship.r/2)+(enemy[i].r)){
      console.log("ded")
      isDed = 1;
      gameState=2;
      localStorage.setItem("highScore", Math.max(score,localStorage.getItem("highScore")));
    }
  }
}

function enemyLaserColl(){
  for(let i=0;i<enemy.length;i++){
    enemyFreq = enemy[i].freq;
    for(let j=0;j<laser.length;j++){
      var dis;
      dis=dist(enemy[i].pos.x,enemy[i].pos.y,laser[j].pos.x,laser[j].pos.y);
      if(dis<enemy[i].r/2+laser[j].r && enemy[i].health){
        score++;
        enemy[i].health--;
        if(enemy[i].health<=0)
          enemy.splice(i,1);
        laser.splice(j,1);
        break;
      }
    }
  }
}

function resetGame(){
  
  laser.splice(0,laser.length);
  enemy.splice(0,enemy.length);
  isDed=0;

}

function deathScreen(){
  rectMode(CENTER);
  fill(200,60)
  stroke(255);
  rect(width/2,height/2,250,75)
  textAlign(CENTER);
  console.log("gameState "+ gameState)
  noStroke()
  fill(250,100,20);
  textSize(30)
  text("High Score: "+(localStorage.getItem("highScore")),width/2,35)
  fill(255)
  textSize(20)
  text("Your Score: "+score,width/2,height/2-10)
  text("\nClick or Tap to Play again",
        width/2,height/2)
  
  resetGame();

}


