class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    //this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
  }
display(){
  fill("pink"); if(this.body.speed<3)
  super.display();

else{
  World.remove(world,this.body)
  
}
}
}