var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var bg = "snow2.jpg", bgImg;

function preload() {
  bgImg = loadImage(bg)
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  if(frameCount % 60 === 0){
    new Snow(random(150,650),370);
  }
}

function draw() {
  background(bgImg);
}