var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  speed = Math.random(221,321);
  weight = Math.random(30,52);
  thickness = Math.random(22,83)

  bullet = createSprite(50,200,50,50);
  bullet.velocityX= speed;

  wall = createSprite(1200,200,thickness,height/2);
}

function draw() {
  background(255,255,255);  

  if(wall.x-bullet.x < (bullet.width+bullet.width)/2){

    bullet.velocityX=0;

  }

  var damage = 0.5* weight* speed* speed/ (thickness*thickness*thickness) 

    if(damage>10){
      wall.shapeColor= color("red");
}
    if(damage<10){
      wall.shapeColor= color("green");
}
  

  drawSprites();
}