var jaxon, jaxon_running;
var street, street_image;
var invisible_wall1;
var invisiblewall1;
var invisibleground;

function preload() {
  //jaxon_running = loadAnimation("Runner_1.png", "Runner_1.png", "Runner_1.png", "Runner_2.png", "Runner_2.png", "Runner_2.png");
  jaxon_running = loadAnimation("Sonic_run.gif");
  //street_image = loadImage("path.png");
  street_image = loadImage("GreenHill2.jpg");
}
function setup() {
  createCanvas(500, 575);
  
invisible_wall1 = createSprite(0,200,10,400);
invisible_wall1.visible = false;

invisiblewall1 = createSprite(999,200,10,400);
invisiblewall1.visible = false;

invisibleground = createSprite(500,450,1000,10);
invisibleground.visible = false;

  street = createSprite(500, 290, 400, 200);
  street.addImage("street", street_image);
  street.scale = 1.15;

  jaxon = createSprite(100, 425, 50, 50);
  jaxon.addAnimation("running", jaxon_running);
  jaxon.scale = 2.5;
  jaxon.visible = true;
}
function draw() {
  background('black');
  
  street.velocityX = -7;
  if (street.x < -90){
    street.x = 0;
    street.x = width/1;
  }
//if (keyDown("RIGHT_ARROW")){
  //jaxon.velocityX = +9; }

//if (keyDown("LEFT_ARROW")){
  //jaxon.velocityX = -9; }

  if (keyDown("space")&& jaxon.y >=375){
    jaxon.velocityY = -13; 
}
    jaxon.velocityY = jaxon.velocityY + 0.5;
    

jaxon.collide(invisible_wall1);
jaxon.collide(invisiblewall1);
jaxon.collide(invisibleground);

 drawSprites();
}
