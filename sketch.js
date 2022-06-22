var ship,ship1;
var sea,sea1;

function preload(){
  ship1 = loadAnimation("ship-1.png", "ship-1.png", "ship-2.png", "ship-1.png");
  sea1 = loadImage("sea.png");
}

function setup(){
  createCanvas(600,500);

  // Moving background
  sea = createSprite(600,300, 800, 500);
  sea.addImage("moving", sea1);
  sea.scale=0.3;
  sea.velocityX = -1 ;

  
  ship = createSprite(50,200,20,50);
  ship.addAnimation("movingShip",ship1);
  createEdgeSprites();


  ship.scale =0.25;
  ship.x = 90;
  ship.y = 300;
  
}

function draw() {
  background("sea.png");  
   if(keyDown("right")){
    ship.velocityX = 3;
  }
    if(keyDown("left")){
      ship.velocityX = -3;
    }
    if(keyDown("space")){
      ship.velocityX = 0;
    }
    if (sea.x < 0){
      sea.x = sea.width/2;
    }
  
//Uncomment the correct line to make the background move to create a forward moving effect for the boat.
  //sea.velocityY = -3;
  //sea.x = -3; 
  //sea.velocityX = -3;


  
    
  drawSprites();
}
