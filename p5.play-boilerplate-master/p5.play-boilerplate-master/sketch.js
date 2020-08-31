var movingRect 
var fixedRect
var ball


function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 100, 50, 50);
  movingRect = createSprite(400,200,50,50);
  ball = createSprite(400,400,50,50);

movingRect.velocityY=3;

fixedRect.velocityY=2;

ball.velocityY= -2;
}

function draw() {
  background("salmon");  

if(BounceOff(movingRect,ball)){
  movingRect.velocityY=movingRect.velocityY *-1;
  ball.velocityY =ball.velocityY*-1;
}
else{
  movingRect.shapeColor ="blue";
  ball.shapeColor="red";
}



  drawSprites();
}

function BounceOff(object1,object2){
  if(object1.x-object2.x < object2.width/2 + object1.width/2 
    && object1.y-object2.y < object2.height/2 + object1.height/2
    && object2.y-object1.y < object2.height/2 + object1.height/2
    && object2.x-object1.x <object2.width/2 + object1.width/2){
  return true;
  }
  else{
    return false;
  }




}