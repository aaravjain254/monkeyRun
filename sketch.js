
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  //to create monkey.
  monkey=createSprite(28,400,35,35);
  monkey.addAnimation("monkey running",monkey_running);
  monkey.scale=0.1;

  //to create ground .
  ground=createSprite(250,430,500,5)
  
  //to create groups.
  FoodGroup=createGroup;
  obstacleGroup=createGroup;
  
    survivaltime = 0;
}


function draw() {
background("skyblue");
  
  if(keyDown("space")&& monkey.y>=100){
    monkey.velocityY=-12
  }
  
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground);

  //to show score.
  stroke("black")
  textSize(20)
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate())
     text("survival Time: "+ survivaltime, 220,35);
  
  //to add function of banana.
  bananna();
  
  //to add function of rocks .
  rocks();
  
  drawSprites();
  
}


function bananna(){
  //to create banana
    if (frameCount % 80 === 0) {
  banana=createSprite(500, 160, 20, 20);
  banana.addImage("banana",bananaImage)
  banana.scale=0.1;
  banana.velocityX=-5;
  banana.lifetime=450;
    
    }
}

function rocks(){
   if (frameCount % 140 === 0) {
  obstacle=createSprite(500,390,30,30);
  obstacle.addImage("obstacle",obstaceImage);
  obstacle.scale=0.2;
  obstacle.velocityX=-5   
  obstacle.lifetime=450;   
     
     obstacleGroup.add
}
  
}


