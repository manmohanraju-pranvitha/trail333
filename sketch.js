
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground1;
var tree1;
var boy,boyimg;
var stone1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var chain1;
var tree2;
function preload()
{
//treeimg=loadImage("tree.png");
boyimg=loadImage("boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	tree=new Tree(600,500);
	//Create the Bodies Here.
//	tree=new Tree(600,500,500,400);
	//tree.addImage(treeimg);
	//tree.scale=0.3;
	boy=createSprite(180,623,10,10);
	boy.addImage(boyimg);
	boy.scale=0.1;
ground1=new Ground(400,680,800,16);

mango1=new Mango(670,400,70,70);
mango2=new Mango(640,470,70,70);
mango3=new Mango(580,390,70,70);
mango4=new Mango(520,370,70,70);
mango5=new Mango(550,390,70,70);
mango6=new Mango(750,465,70,70);
mango7=new Mango(430,409,70,70);
stone1=new Stone(120,560,40,40);
chain1=new Chain(stone1.body,{x:235,y:420});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground1.display();
  tree.display();
  boy.display();
stone1.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
chain1.display();
detectcollision(stone1,mango1);

  detectcollision(stone1,mango2);
  detectcollision(stone1,mango3);
  detectcollision(stone1,mango4);
  detectcollision(stone1,mango5);
  
  detectcollision(stone1,mango6);
  detectcollision(stone1,mango7);


  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain1.fly();
}
function detectcollision (stoneobject,mangoobject){
	mangoBodyPosition=mangoobject.body.position 
	stoneBodyPosition=stoneobject.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mangoobject.r+stoneobject.r){
		Matter.Body.setStatic(mangoobject.body,false);
	}
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone1.body,{x:235,y:420});
		chain1.attach(stone1.body);
	}
}





