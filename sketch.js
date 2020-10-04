var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 100, 100);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600, 400, 80, 150);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  box1 = createSprite(200, 450, 100, 100);
  box1.shapeColor = "green";
  
  box2 = createSprite(600, 450, 50, 100);
  box2.shapeColor = "green";

  box1.velocityX = +5;
  box2.velocityX = -5;

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";
}
function draw() {
  background(0); 

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  text("("+mouseX+","+mouseY+")" ,mouseX, mouseY)

  bounceOff(box1,box1); 


  if(isTouching(movingRect, gameObject4)){
    gameObject4.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    gameObject4.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  //for object to touch each other distance between them :fixedRect.width/2+movingrect.width/2
  drawSprites();
}





