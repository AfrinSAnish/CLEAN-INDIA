var paper1,ground,side1,side2,side3,bin,bg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bin=loadImage('dustbingreen.png');
	bg=loadImage('bg.png');
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

    paper1= new Paper(100,400,80);
	ground= new Ground(600,570,1200,5);
	side1=new Box(605,490,20,150);
	side2=new Box(655,560,120,20);
	side3=new Box(700,490,20,150);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background(84,216,255);
  background(bg)
  ground.display()
  paper1.display();
  side1.display()
  side2.display()
  side3.display();
  image(bin,590,415,130,160)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper1.body,paper1.body.position,{x:250,y:-250});
  
	}
}



