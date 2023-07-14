var ship;
var enemy = [];
var laser = [];
var powerup = [];
var wait = 0;
var waitSet = 4;
var score = 0;
var enemyFreq = 30;  //more means less frequent
var isDed = 0;

function setup() {
  // put setup code here
  //createCanvas(1536,859.3);  //full scr
  createCanvas(window.innerWidth, window.innerHeight);  //test scr
  ship = new Ship();
  // for(var i=0;i<20;i++)
  // powerup.push(new Powerup);
}

function draw() {
  // put drawing code here
  background('#373B6E');
  console.log(enemyFreq);

  // noLoop();
  // setTimeout(redraw, 10);

  //non-continous lasers
  wait++;
  wait%=enemyFreq;

  ship.render();

  // for(var i=0;i<powerup.length;i++){
  //   powerup[i].render();
  //   powerup[i].move();
  // }

  //shooting-laser adding
  if(mouseIsPressed && !(wait%waitSet) ) {
    laser.push(new Laser3(ship)); 
  }

  //laser rendering and removing
  for(var i=0;i<laser.length;i++){
    laser[i].render();
    laser[i].move();

    if(laser[i].pos.y<0)
      laser.splice(i,1);
  }

  
  //enemy rendering and removing
  for(var i=0;i<enemy.length;i++){
    enemy[i].render();
    enemy[i].move();

    var freq = enemy[i]

  if(enemy[i].pos.y>height)
    enemy.splice(i,1);
  }

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

  if(isDed){
    noLoop();
  }


  //enemy-laser collision check
  // for(let i=0;i<enemy.length;i++){
  //   enemyFreq = enemy[i].freq;
  //   for(let j=0;j<laser.length;j++){
  //     var dis;
  //     dis=dist(enemy[i].pos.x,enemy[i].pos.y,laser[j].pos.x,laser[j].pos.y);
  //     if(dis<enemy[i].r/2+laser[j].r && enemy[i].health){
  //       console.log("HTI !!  score-> "+ score);
  //       score++;
  //       enemy[i].health--;
  //       if(enemy[i].health<=0)
  //         enemy.splice(i,1);
  //       laser.splice(j,1);
  //       break;
  //     }
  //   }
  // }

  for(let i=0;i<enemy.length;i++){
    enemyFreq = enemy[i].freq;
    for(let j=0;j<laser.length;j++){
      var dis;
      dis=dist(enemy[i].pos.x,enemy[i].pos.y,laser[j].pos.x,laser[j].pos.y);
      if(dis<enemy[i].r/2+laser[j].r && enemy[i].health){
        console.log("HTI !!  score-> "+ score);
        score++;
        enemy[i].health--;
        if(enemy[i].health<=0)
          enemy.splice(i,1);
        laser.splice(j,1);
        break;
      }
    }
  }


  //elemy-ship collision check

  for(let i=0;i<enemy.length;i++){
    var dis2;
    dis2=dist(ship.pos.x,ship.pos.y,enemy[i].pos.x,enemy[i].pos.y);
    if(dis2<(ship.r/2)+(enemy[i].r)){
      console.log("!! YOU DIED !!");
      isDed = 1;
    }
  }
  // frameRate(10)

}

