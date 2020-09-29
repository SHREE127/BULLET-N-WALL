var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(800,200);

  speed = Math.random(300,350);
  weight = Math.random(30,55);
  thickness = Math.random(30,85)

  wall = createSprite(600,100,thickness,height/2);
  wall.shapeColor=("white");

  bullet = createSprite(25,height/2,25,25);
  bullet.velocityX= speed;
}

function draw() {
  background("black");  

  if(hasCollided(bullet,wall)){

    bullet.velocityX=0;

     var damage = 0.5* weight* speed* speed/ (thickness*thickness*thickness) 

    if(damage>10){
      wall.shapeColor= color("red");
}
    if(damage<10){
      wall.shapeColor= color("green");
}

}

  drawSprites();
}
