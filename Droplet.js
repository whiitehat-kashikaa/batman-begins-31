class Droplet {
   constructor(x,y){
       var options = {
        friction : 0.001,
        restitution : 0.1
    }
    this.rain = Bodies.rectangle(x,y, 200, 200, options);
    this.width = 200;
    this.height = 200;
    this.image = loadImage("images/drop.png");
    World.add(world, this.rain);
 
  }
   

display(){
    var pos = this.rain.position;

    imageMode(CENTER);
    image(this.image, pos.x, pos.y, 200,200);
}


updateY(){
    if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain, {x : random(0, 700), y : random(0, 200)})
    }
}
}