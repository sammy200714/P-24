
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var rightSide, leftSide, bottomSide;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(50,350,30);

	bottomSide = new DustBin(415, 650, 200, 20);
    leftSide = new DustBin(330, 620, 20, 100);
	rightSide = new DustBin(500, 620, 20, 100);
	
	ground = new Ground(width/2, height-10, width, 20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  text(mouseX + "," + mouseY, mouseX, mouseY);

  paper.present();

  bottomSide.present();
  rightSide.present();
  leftSide.present();
  
  ground.present();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode==UP_ARROW){
    Matter.Body.applyForce(paper.body, paper.body.position, {x:120,y:-120})
  }
}



