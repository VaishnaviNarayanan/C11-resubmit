
function preload(){
  //pre-load images
  pathImage=loadImage("path.png")
  boyAnimation=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200,400,400)
  path.addImage(pathImage)
  path.velocityY=3

  boy=createSprite(200,300)
  boy.addAnimation("boy",boyAnimation)
  boy.scale=0.1

  boundaryR=createSprite(400,200,20,400)
  boundaryL=createSprite(0,200,20,400)
  boundaryR.visible=false
  boundaryL.visible=false
}

function draw() {
  background(0);
  if(path.y>400){
    path.y=200
  }
  boy.x=mouseX
  boy.collide(boundaryL)
  boy.collide(boundaryR)
  drawSprites()
}
