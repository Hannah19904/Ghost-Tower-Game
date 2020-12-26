var tower,towerimg,ghost,ghostimg,door,doorimg,doorgroup,climber,climberimg,climbergroup,block,blockgroup
var gamestate="play"

function preload(){
  towerimg=loadImage("tower.png")
  ghostimg=loadImage("ghost-standing.png")
  doorimg=loadImage("door.png")
  climberimg=loadImage("climber.png")
}

function setup(){
  createCanvas(600,600)
  tower=createSprite(300,300)
  tower.addImage(towerimg)
  tower.velocityY=1
  doorgroup=createGroup()
  climbergroup=createGroup()
  ghost=createSprite(200,200)
  ghost.addImage(ghostimg)
  ghost.scale=0.4
  blockgroup=createGroup()
}

function draw(){
  background("black")
  if (gamestate=="play"){
    
  
  if (tower.y>400){
    tower.y=300
  }
  if (keyDown("left_arrow")){
    ghost.x=ghost.x-3
  }
  if (keyDown("right_arrow")){
    ghost.x=ghost.x+3
  }
  if (keyDown("space")){
    ghost.velocityY=-5
  }
  ghost.velocityY=ghost.velocityY+0.5
  if (climbergroup.isTouching(ghost)){
    ghost.velocityY=0
  }
    doors()
  if (blockgroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy()
    gamestate="end"
  }
  drawSprites()
}
  if (gamestate=="end"){
    fill("yellow")
    textSize(30)
    text("Game Over",230,250)
  }
}

function doors(){
  if (frameCount%200==0){
    door=createSprite(200,-50)
    door.addImage(doorimg)
    door.x=Math.round(random(120,400))
    door.velocityY=1
    door.lifetime=800
    climber=createSprite(door.x,10)
    climber.addImage(climberimg)
    climber.velocityY=1
    climber.lifetime=800
    block=createSprite(door.x,15,climber.width,2)
    block.velocityY=1
    ghost.depth=door.depth
    ghost.depth+=1
    doorgroup.add(door)
    climbergroup.add(climber)
    blockgroup.add(block)
    
  }
}
