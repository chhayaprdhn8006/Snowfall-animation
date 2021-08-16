const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bgImage;
var snows = [];

function preload(){
  bgImage = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(bgImage); 
  
  if(frameCount%20===0){
      snows.push(new snow(random(0,800),random(0,400)));
  }

 for(var k = 0; k < snows.length; k++){
      snows[k].display();
  }

  drawSprites();
}