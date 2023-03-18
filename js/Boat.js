class Boat{
  constructor(x,y,width,height,boatpos){
    var options = {
        isStatic: true
    }

  
  this.body= Bodies.rectangle(x,y,width.height,options);
   this.width=width;
   this.height=height;


   this.image=loadlmage("./assests/boat.png");
   this.boatposition=boatpos;
   World.add(world, this.body);

} 
 display(){
    var pos=this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.width, this.height);
    pop();
 }
}