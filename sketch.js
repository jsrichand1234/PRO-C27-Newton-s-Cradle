
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var phyImg,phy,img,Img;

var bobDiameter = 50;

function preload() {
	phyImg = loadImage("phy.gif");
	img = loadImage("Newton.jpg");
}

function setup() {
	createCanvas(800, 700);
  phy = createSprite(500,575);
  phy.addImage(phyImg);
  phy.scale=0.75;

  Img = createSprite(100,575);
  Img.addImage(img);
  Img.scale=0.50;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(220, 300, 25)
	bob2 = new Bob(270, 300, 25)
	bob3 = new Bob(320, 300, 25)
	bob4 = new Bob(370, 300, 25)
	bob5 = new Bob(420, 300, 25)
	roof1 = new Roof(350, 100, 400, 20)
	chain1 = new Chain(bob1.body, roof1.body, -(bobDiameter * 2), 3)
	chain2 = new Chain(bob2.body, roof1.body, -bobDiameter, 0)
	chain3 = new Chain(bob3.body, roof1.body, 2, 0)
	chain4 = new Chain(bob4.body, roof1.body, bobDiameter, 0)
	chain5 = new Chain(bob5.body, roof1.body, bobDiameter * 2, 0)

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("yellow");

	drawSprites();
	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	bob1.display();
	roof1.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW)

		Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -200, y: 200})
}

