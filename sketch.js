
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function preload()
{

	

}

function setup() {
	createCanvas(800, 700);
console.log("after changing the backlground")

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.

	paper1 = new Paper(200, 500, 70)
	
	part1 = new Trash(600, 560, 15, 80)
	ground = new Ground(width/2, 650, width, 100) 
	part2 = new Trash(450, 560, 15, 80)
	part3 = new Trash(525, 593, 135, 15)
	
	
  
}


function draw() {
  ellipseMode(CENTER);
  background("white");
  
  
  
 
  paper1.display();
  part1.display()
  ground.display()
  part2.display()
  
  part3.display()
 text("mouseX: " + mouseX, 360, 40)
 text("mouseY: " + mouseY, 360, 70) 
}


function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 500, y: 1000})
	}
}
