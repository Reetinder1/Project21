var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(2000,400);

  thickness = random(22,83);
  speed = random(233,321);
  weight = random(30,52);

  bullet =  createSprite(50, 200, 20, 10);
  bullet.shapeColor=color(255,255,255);
  bullet.velocityX = speed;
  //bullet.debug = true;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  //wall .debug = true;
  
 
 
}

function draw() {
  background(100,100,100); 
   
  if(hasCollided(bullet,wall)){
    
      bullet.velocityX = 0;
    
    
    var damage = 0.5 * weight* speed* speed/(thickness *thickness *thickness);

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  
}
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+bullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}
