var scene, sceneImg
var ground
var monkey, monkeyImg
var rock, rockImg
var banana, bananaImg


function preload() {
  sceneImg = loadImage('forest background.jpg');

  monkeyImg = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
rockImg = loadImage('obstacle.png');
bananaImg = loadImage('banana.png');

  
}

function setup() {
  createCanvas(600, 600);
  scene = createSprite(300, 300, 600, 600);
  scene.addImage(sceneImg);
  scene.scale = 1.5;

  ground = createSprite(600, 550, 600,0.5);
  ground.velocityX=2;

  monkey = createSprite(200,430,30,30);
  monkey.addAnimation('running', monkeyImg);
  monkey.scale = 0.15;
  
}

function draw() {
  background('white');
  scene.velocityX =2;
  if (scene.x > 400) {
    scene.x = 200;
  }
  if (ground.x > 300) {
    ground.x = 200;
  }
  if (keyDown('space')) {
    monkey.velocityY = -8;
  }
  monkey.velocityY += 1;
  monkey.collide(ground);
  spawnRocks();
  spawnBananas();
    
  drawSprites();
  
}
  


function spawnRocks(){
  if(frameCount % 200 === 0){
    rock = createSprite(0,530);
    rock.addImage(rockImg);
    rock.scale=0.1;
    rock.x=Math.round(random(0,510));
    rock.velocityX=-2;
  }
}

function spawnBananas(){
  if(frameCount % 200 === 0){
    banana = createSprite(260,350);
    banana.addImage(bananaImg);
    banana.scale=0.15;
    banana.x=Math.round(random(250,510));
    banana.velocityX=-2; 
  }
  
}





