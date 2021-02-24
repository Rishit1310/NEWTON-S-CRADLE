
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5
var roof1
var rope1

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;
	roof1 = new Roof(400,50,400,50)
	bob1 = new bob(200,400,30)
    bob2 = new bob(300,400,30)
	bob3 = new bob(400,400,30)
	bob4 = new bob(500,400,30)
	bob5 = new bob(600,400,30)
	
    ropeobj = new Rope (bob1.body,roof1.body,-100,10)
	
    ropeobj1 = new Rope (bob2.body,roof1.body,-50,10)

    ropeobj2 = new Rope (bob3.body,roof1.body,0,10)

    ropeobj3 = new Rope (bob4.body,roof1.body,50,10)

    ropeobj4 = new Rope (bob5.body,roof1.body,100,10)

	Engine.run(engine);
  
}


function draw() {

  background("grey");


  Engine.update(engine);
   roof1.display();
   ropeobj.display();
 ropeobj1.display();
 ropeobj2.display();
 ropeobj3.display();
 ropeobj4.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

 
 

 text(mouseX + "," + mouseY, mouseX, mouseY)
  

  drawSprites();
  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-700,y:705});
	}
}


