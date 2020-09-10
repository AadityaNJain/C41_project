var man;
var rainImage;
var manImage;
var ground;
var lightingImage;

function preload(){
 rainImage = loadImage("ball.png");
 manImage = loadImage("man.png");
 lightingImage = loadImage("lighting.png");
}

function setup(){
    createCanvas(600,500);

    man = createSprite(300,351,50,50);
    man.addImage("man",manImage);
    man.scale = 0.5;

    ground = createSprite(300,490,600,20);
    ground.shapeColor = "black";

}

function draw(){
    background("grey");
    createLighting();
    createRain();
    drawSprites();
}  

function createRain(){
    if(World.frameCount % 4 === 0){
      var rain = createSprite(400,0,20,20);
      rain.addImage("rain",rainImage);
      rain.velocityY = 10;
      rain.scale = 0.02;
      rain.x = Math.round(random(100,500));
    }
}

function createLighting(){
    if(World.frameCount % 70 === 0){
      var lighting = createSprite(400,30,20,20);
      lighting.addImage("lighting",lightingImage);
      lighting.x = Math.round(random(100,500));
      lighting.scale = 0.05;
      lighting.velocityY = -30;
    }
}

