var road,roadImg
var player,playerImg
var nail,nailImg
var apple,appleImg
var orange,orangeImg
var bannana,bannnaImg
var mango,mangoImg
var randomNumber
var PLAY=1
var END=0
var gameState=PLAY




function preload(){
roadImg=loadImage("road.jpg")
playerImg=loadAnimation("boy gif.gif")
nailImg=loadImage("nail.png")
appleImg=loadImage("apple.png")
orangeImg=loadImage("orange.png")
bannanaImg=loadImage("bannna.png")
mangoImg=loadImage("mango.png")
}





function setup() {
  createCanvas(windowWidth,windowHeight);
  road=createSprite(windowWidth/2,windowHeight/2);
  road.addImage(roadImg);
  player=createSprite(55,windowHeight/2)
  player.addAnimation("running",playerImg)
  player.scale=0.3
  fruitGroup = new Group();
  nailGroup = new Group();
  player.debug=true
  player.setCollider("circle",0,0,70)
  


}

function draw() {
  if (gameState===PLAY){
    spawnNails();
    spawnFruits();
    if(nailGroup.isTouching(player)){
      gameState=END;
    }
  }
  else if(gameState===END){
    nail.velocityX=0
    player.velocityX=0
    fruit.velocityX=0

    nailGroup.setVelocityXEach(0)
    frruitGroup.setVelocityXEach(0)

    nailGroup.setLifetimeEach(-1)
    fruitGroup.setLifetimeEach(-1)
  }
  background("black"); 

  drawSprites();
  //spawnFruits();
  fill("red")
  text(mouseX+","+mouseY,mouseX,mouseY)
}

function spawnNails(){
  if(frameCount%60===0){
  nail=createSprite(1060,random(344,630))
  nail.addImage("nail ",nailImg)
  nail.velocityX=-3
  nail.scale=0.1
  nailGroup.add(nail);
  }
}

function spawnFruits(){
if(frameCount%80===0){
  fruit=createSprite(1060,random(344,630))
  //fruit.addImage("apple",appleImg)
  fruit.velocityX=-2
  fruit.scale=0.1
  randomNumber=Math.round(random(1,4))
  switch(randomNumber){
    case 1:
      fruit.addImage("apple",appleImg)
      break;
      case 2:
        fruit.addImage("orange",orangeImg)
        break;
        case 3:
          fruit.addImage("bannana",bannanaImg)
          break;
          case 4:
            fruit.addImage("mango",mangoImg)
            break;
            default:break;
          
  }
  fruit.scale=0.1
  fruit.lifetime=550
  fruitGroup.add(fruit)
}
}


