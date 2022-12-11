// https://www.loom.com/share/16a7c12c4821465d8e3d705cb8ee99f5
let bullets = [];
let enemies = [];
let enemies2 = [];
let sps = [];
let score = 0;
let stat = 0;
let changeDirection;
let lvlup = false;

function preload() {
  img0 = loadImage("img0.png");
  img1 = loadImage("img1.png");
  img2 = loadImage("img2.png");
  img3 = loadImage("img3.png");
  img4 = loadImage("img4.png");
  img5 = loadImage("img5.png");
  img6 = loadImage("img6.png");
  img7 = loadImage("img7.png");
  font = loadFont("VT323.ttf");
  sps = loadImage("sps.png");
  co2 = loadImage("co2.png");
  uvrays = loadImage("uvrays.png");
  soundFormats('mp3','wav');
  music = loadSound("music.mp3");
  shot = loadSound("shot.wav");
  over = loadSound("over.wav");
  laser = loadSound("laser.wav");

}
function setup() {
  createCanvas(400, 400);
}
function inicio(){
  for (let i = 0; i < 10; i++) {
    let enemy = {
      x: random(0, width - 45),
      y: random(-400, 0),
    };
    enemies.push(enemy);
  }
}
function inicio2(){
  for( let i = 0; i < 10; i++){
  let enemy2 = {
    x: (0, width),
    y: random(-800, 0),
  };
  enemies2.push(enemy2);
  }
}
function draw() {
 //music.play();
  if (stat === 0) {
    fase0();
  }
  if (stat == 1) {
    fase1();
  }
  if (stat == 2) {
    fase2();
  }
  if (stat == 3) {
    fase3();
  }
  if (stat == 4) {
    fase4();
  } if (stat == 5){
    fase5();
  }
  if (stat == 6){
    fase1a();
  }if (stat == 7){
    fase1b()
  }
}
function fase0() {
  //Main Menu
  background(img0);
}
function spsm() {
  image(sps, mouseX, height - 50, 50);
}
function fase1() {
  //game
  background(img1);
  rectMode(CENTER);
  spsm();
  for (let bullet of bullets) {
    bullet.y -= 10;
    fill(255);
    circle(bullet.x, bullet.y, 10);
  }
  for (let enemy of enemies) {
    enemy.y += 2;
    image(co2, enemy.x, enemy.y, 20);
    if (enemy.y > height) {
      stat = 4;
    } 
}
  for (let enemy of enemies) {
    for (let bullet of bullets) {
      if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 20) {
        enemies.splice(enemies.indexOf(enemy), 1);
        bullets.splice(bullets.indexOf(bullet), 1)
        let newEnemy = {
          x: random(0, width),
          y: random(-800, 0),
        };
        enemies.push(newEnemy);
        score++;
        if(score >= 40 && lvlup == false){
          stat = 7;
        }else if(score >= 40 && lvlup == true){
          stat = 5;
        }
      }
    }
  }if(lvlup == true){
    fase1b1();
  }
  textFont(font);
  textSize(18);
  text(score, 29, 19);
}
function fase1a(){
  //troposfera
  background(img6);
  text("Clique AQUI para continuar!", 220, 14);
  stroke(255, 255, 255);
  fill(12, 57, 66); 
}
function fase1b1(){
  //game2
  for (let enemy2 of enemies2){
    enemy2.y += 2;
    image(uvrays, enemy2.x, enemy2.y, 20);
    if(enemy2.y > height){
      stat = 4;
    }if (enemy2.x > 350){
      changeDirection = true
    }else if( enemy2.x <= 30){
      changeDirection = false
    }if (enemy2.x >= 0 && changeDirection == false){
      enemy2.x = enemy2.x + 1;
    }else if(changeDirection == true){
      enemy2.x = enemy2.x - 2;
  }
}
  for (let enemy2 of enemies2){
    for (let bullet of bullets){
      if(dist(enemy2.x, enemy2.y, bullet.x, bullet.y) < 30){
        enemies2.splice(enemies2.indexOf(enemy2), 1);
        bullets.splice(bullets.indexOf(bullet), 1);
        let newEnemy2 = {
          x: random(0, width),
          y: random(-800, 0),
        };
        enemies2.push(newEnemy2);
        score++;
      }
    }
  }
if(score >= 40 && lvlup == true){
          stat = 5;
  }
}
function fase1b(){
  //estratosfera
  score = 0;
  enemies = [];
  background(img7);
  textSize(15);
  text("Clique AQUI para continuar!", 220, 14);
  stroke(255, 255, 255);
  fill(12, 57, 66);
  lvlup = true;
}
function fase2() {
  //instr
  background(img2);
  textFont(font);
  text("Clique AQUI para voltar!", 220, 14);
  stroke(255, 255, 255);
  fill(12, 57, 66);
}
function fase3() {
  //cred
  background(img3);
  textFont(font);
  text("Clique AQUI para voltar!", 220, 14);
  stroke(255, 255, 255);
  fill(12, 57, 66);
}
function fase4() {
  //gameover
  //over.play();
  background(img4);
  textFont(font);
  text("aperte o botão ENTER para voltar!", 100, 249);
  fill(34, 0, 12);
  text(score + " pontos!", 175, 218);
  textSize(15);
  enemies = [];
  if (keyCode === ENTER) {
    redraw();
    stat = 0;
    score = 0;
  }
}function fase5() {
  //vitoria
  lvlup = false;
  background(img5);
  textFont(font);
  text("aperte o botão ENTER para voltar!", 100, 249);
  fill(34, 0, 12);
  text(score + " pontos!", 175, 218);
  textSize(15);
  enemies = [];
  if (keyCode === ENTER) {
    redraw();
    stat = 0;
    score = 0;
}
}
function mouseClicked() {
  if (stat == 0) {
    if (mouseX < 293 && mouseX > 108) {
      if (mouseY < 148 && mouseY > 115) {
        stat = 6;
      }
      if (mouseY < 220 && mouseY > 180) {
        stat = 2;
      }
      if (mouseY < 280 && mouseY > 245) {
        stat = 3;
      }
    }
  }
  if (stat == 2) {
    if (mouseX < 390 && mouseX > 220) {
      if (mouseY < 20 && mouseY > 10) {
        stat = 0;
      }
    }
  }
  if (stat == 3) {
    if (mouseX < 390 && mouseX > 220) {
      if (mouseY < 20 && mouseY > 10) {
        stat = 0;
      }
    }
  }  if (stat == 6) {
    if (mouseX < 390 && mouseX > 220) {
      if (mouseY < 20 && mouseY > 10) {
        stat = 1;
        inicio();
      }
    }
  } if (stat == 7) {
    if (mouseX < 390 && mouseX > 220) {
      if (mouseY < 20 && mouseY > 10) {
        stat = 1;
        inicio();
        inicio2();
      }
    }
  }
}
function mousePressed() {
  if (stat == 1) {
    shot.play();
    let bullet = {
      x: mouseX + 15,
      y: height - 50,
    };
    bullets.push(bullet);
  }
}