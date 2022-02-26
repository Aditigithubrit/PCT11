var path , pathImage
 var jake , jake_running
 var  leftinvisibleBoundary , RightinivisibleBoundary


function preload(){
pathImage = loadImage("path.png");
 jake_running = loadAnimation("Jake1.png", "Jake2.png" , "Jake3.png");
}
function setup() {
path=createSprite(200,200);
path.addImage(pathImage);
path.velocityY = 3;
path.scale=1.2;

jake=createSprite(200,240,50,60);
jake.addAnimation("runnning", jake_running);
jake.scale=0.9;

leftinvisibleBoundary = createSprite(370,200,20,400);
leftinvisibleBoundary.visible = false;

RightinivisibleBoundary = createSprite(32,200, 20 , 400);
RightinivisibleBoundary.visible = false;

}

 function draw(){

background(0)



if(path.y > 400){
  path.y = height/2;
}

jake.x = World.mouseX;

jake.collide(leftinvisibleBoundary);
jake.collide(RightinivisibleBoundary)



drawSprites();



}

