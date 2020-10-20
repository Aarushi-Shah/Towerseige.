const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var b1 = 0;
var b2 = 0;
var b3 = 0;
var score
var engine, world;

function setup() {
  backgroundColorFinder();
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height,1200,20);
  base = new Ground(390,360 ,250,20);
  base2 = new Ground(550,240 ,180,20);
  
  polygon = new Polygon(50,200,20)
  
  sling = new SlingShot(polygon.body,{x:150,y:100})  
  
  score = 0

  // //first pyramid
  block1 = new Box(390,215,30,40);
  block2 = new Box(420,255,30,40);
  block3 = new Box(390,255,30,40);
  block4 = new Box(360,255,30,40);
  block5 = new Box(450,295,30,40);
  block6 = new Box(420,295,30,40);
  block7 = new Box(330,295,30,40);
  block8 = new Box(360,295,30,40);
  block9 = new Box(390,295,30,40);
  block10 = new Box(420,335,30,40);
  block11 = new Box(450,335,30,40);
  block12 = new Box(480,335,30,40);
  block13 = new Box(390,335,30,40);
  block14 = new Box(360,335,30,40);
  block15 = new Box(330,335,30,40);
  block16 = new Box(300,335,30,40)
//  //second pyramid
block20 = new Box(545,135,30,40);
block21 = new Box(575,175,30,40);
block22 = new Box(545,175,30,40);
block23 = new Box(515,175,30,40);
block24 = new Box(485,215,30,40);
block25 = new Box(515,215,30,40);
block26 = new Box(545,215,30,40);
block27 = new Box(575,215,30,40);
block28 = new Box(605,215,30,40);


}


function draw() {
  
  background(b1,b2,b3);
  textSize(35)
  fill("white")
  text("Score:"+score,150,40)
  
  Engine.update(engine)
  ground.display();
  base.display();
  base2.display();
  sling.display();
  polygon.display();
  // //display pyramid 1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block19.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
 // //dispaly pyramid 2
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
 
 // //initiating the score
 block1.score(); 
 block2.score();
 block3.score();
 block4.score();
 block5.score();
 block6.score();
 block7.score();
 block8.score();
 block9.score();
 block10.score();
 block11.score();
 block12.score();
 block13.score();
 block14.score();
 block15.score();
 block16.score();
 
 block20.score(); 
 block21.score();
 block22.score();
 block23.score();
 block24.score();
 block25.score();
 block26.score
 block27.score();
 block28.score();


}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
     sling.attach(polygon.body);
  }
}



async function backgroundColorFinder(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  //alert(hour);
  if(hour>=0600 && hour<=1800){
    b1 =2;
    b2= 5;
    b3 = 45;
  }
  else{
    b1 = 0;
    b2= 9;
    b3 = 135;
  }
}