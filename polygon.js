class Polygon {
    constructor(x,y,radius,options){       
        options= {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false

        }
        
        this.body = Bodies.circle(50,200,20,options)
        World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
         fill("yellow");
         ellipse(pos.x, pos.y, 20, 20);
        //  if(this.body.velocity.x > 10 && this.body.position.x > 200){
        //     var position = [this.body.position.x, this.body.position.y];
        //     this.trajectory.push(position);
        //   }
    }
}
/*class Pig extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("sprites/enemy.png");
      this.Visiblity = 255;
    }
  
   display(){
     //console.log(this.body.speed);
     if(this.body.speed < 3){
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
       pop();
     }
    }
  
    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
      }
    }
  
  
  
  };*/