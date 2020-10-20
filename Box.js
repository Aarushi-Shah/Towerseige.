class Box  {
  constructor(x, y, width, height) {
  
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    //this.image = loadImage("sprites/base.png");
    // Matter.Body.setAngle(this.body, angle);
    World.add(world, this.body);
    
  
  }

  display(){
     var pos =this.body.position;
    if(this.body.speed > 3){
      
      World.remove(world, this.body);
     }
     else{
       
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
     
    rectMode(CENTER);
    fill("purple");
    rect(pos.x, pos.y, this.width, this.height);
     }
  }
}

function score(){
  if(this.visibility<0 && this.visibility>=105){
    score++
  }
  }
