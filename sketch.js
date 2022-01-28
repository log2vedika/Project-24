
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var angle = 60



function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
     
   };
  
  

  ground = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
  button=createImg('up.png')
  button.position(20,20)
  button.size(50,50)
  button.mouseClicked(vforce)
  ground2  = Bodies.rectangle(100,250,100,20,ground_options)
  World.add(World,ground2)
}


function draw() 
{
  background(51);
  Engine.update(engine);
  Matter.Body.rotate(ground2,angle)
  push();
  translate(ground2.position.x,ground2.position.y)
  rotate(angle)
  rect(0,0,100,20)
  pop();
  angle+=0.1
 

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);
 
console.log(ground.position.y);

  
  
}
function vforce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}

