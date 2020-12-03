var fixedRect,movingRect
var car,wall
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 80,50);
  fixedRect.shapeColor = "green"
  fixedRect.debug = true
  movingRect = createSprite(400, 200, 50, 80);
  movingRect.shapeColor = "green"
  movingRect.debug = true

  car = createSprite(200,100,20,20); 
  car.shapeColor = "blue"; car.velocityX = 4; 
  wall = createSprite(800,100,10,50); 
  wall.shapeColor = "pink"

}


function draw() {
  background(255,255,255);  
  movingRect.x =World.mouseX;
  movingRect.y = World.mouseY;

//istouching();
if(istouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red"; 
  fixedRect.shapeColor = "red"; 
  
}
else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor= "green"; 
}
bounceOff(car,wall);
  drawSprites();
}  


