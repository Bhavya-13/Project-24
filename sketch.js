var box1,box2,box3;
var ball;
var invisibleGround;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  ball = new Paper(100, 600, 50);

	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  Engine.update(engine);

  ball.display();

  invisibleGround = createSprite(400,665,800,10);

  //ball.collide(invisibleGround);

box1=rect(600,650,200,20);
box2=rect(700,610,20,100);
box3=rect(500,610,20,100);
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body, ball.body.position,{x:85, y:-85});
  }
}



