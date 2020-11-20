var car,wall;
var speed,weight;

function setup() {
  speed = random (45,90);
  weight = random(400,1500)
  createCanvas(800,400);
  car = createSprite(50, 200, 30, 30);
  car.velocityX = speed;
  wall = createSprite(750,200,20,height/2)

  car.shapeColor = "white"
  wall.shapeColor = "orange"
  
}

function draw() {
  background(0,0,0);
  var deformation =0.5*weight*speed*speed/22509
  if(deformation>180){
    car.shapeColor ="red";
  }else if(deformation<180&&deformation>100){
car.shapeColor = "yellow"
  }else if(deformation<100){
    car.shapeColor = "green"
} else{
    car.shapeColor ="white"
  }
  car.collide(wall);  
  drawSprites();
}