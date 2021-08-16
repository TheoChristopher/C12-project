var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var bombImg,coinImg;
var energyDrinkImg

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png");
  coinImg = loadAnimation("coin.png");
  bombImg = loadAnimation("bomb.png");
  energyDrinkImg = loadAnimation("energyDrink.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.addAnimation("JakeRunning",boyImg);

//collecting coins
coin = createSprite(200, 10);
  coin.addAnimation("coin", coinImg);
  coin.scale = 0.3;
  coin.velocityY = 8;
  
  coin1 = createSprite(120, 10);
  coin1.addAnimation("coin", coinImg);
  coin1.scale = 0.3;
  coin1.velocityY = 8;
  
  coin2 = createSprite(280, 10);
  coin2.addAnimation("coin", coinImg);
  coin2.scale = 0.3;
  coin2.velocityY = 8;

  bomb = createSprite(200, -100);
  bomb.addAnimation("bomb", bombImg);
  bomb.scale = 0.05;
  bomb.velocityY = 8;
  bomb.tint = rgb(255, 0, 0);
  
  bomb1 = createSprite(120, -300);
  bomb1.addAnimation("bomb", bombImg);
  bomb1.scale = 0.05;
  bomb1.velocityY = 8;
  bomb1.tint = rgb(255, 0, 0);

  bomb2 = createSprite(280, -400);
  bomb2.addAnimation("bomb", bombImg);
  bomb2.scale = 0.05;
  bomb2.velocityY = 8;
  bomb2.tint = rgb(255, 0, 0);

  energy = createSprite(200, -2000);
  energy.addAnimation("energy", energyDrinkImg);
  energy.scale = 0.05;
  energy.velocityY = 10;
  
  energy1 = createSprite(120, -600);
  energy1.addAnimation("energy", energyDrinkImg);
  energy1.scale = 0.05;
  energy1.velocityY = 10;
  
  energy2 = createSprite(280, -1000);
  energy2.addAnimation("energy", energyDrinkImg);
  energy2.scale = 0.05;
  energy2.velocityY = 10;









  
// create left Boundary
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moving on Xaxis with mouse
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}