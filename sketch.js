var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png")
  ;
}
function setup() {
  createCanvas(600,200);
}

trex = createSprite(50,180,20,50);
trex.addAnimation("running",trex_running);

trex.scale = 0.5;
trex.X = 50;

ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.X = ground.width/2;

function draw() 
{
  background(220);
  
  ground.velocityX = -2
  console.log(ground.X)

  if(ground.X < 0){
    ground.X = ground.width/2;
  }
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.8
  trex.collide(ground);

  drawSprites();
    
}




