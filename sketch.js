
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20)
	box1=new Box(890,590,10,100)
	box2=new Box(1000,590,10,100)
	box3=new Box(930,590,150,10)
	paper=new Paper(80,590,40)


	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display() 
  box1.display()
  box2.display()
  box3.display() 
  paper.display()

  drawSprites();
  
  keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0.7,y:-30});
	}
}



