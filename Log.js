class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("wood2.png");
    Matter.Body.setAngle(this.body, angle);
  }
  display(){
    if (this.body.speed<4){
      super.display();
    }
    else {
      World.remove(world,this.body)
      push();
     this.Visiblity = this.Visiblity-5
      tint(255,this.Visiblity)
     image(this.image,this.body.position.x,this.body.position.y,50,50)
     pop();
    }
  }
 };
