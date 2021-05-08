class Thunder extends BaseClass{
    constructor(x,y,width,height){
        var options ={
            isStatic : true
        }

        super(x,y,500,500, options);

        this.image = loadImage("images/thunderbolt/4.png");


    }

display(){


    var pos =this.body.position; 

    if(frameCount % 10 === 0){
        if(pos.x > width || pos.y > height) {
            this.image = loadImage("images/thunderbolt/4.png");
            this.image = loadImage("images/thunderbolt/1.png");
            this.image = loadImage("images/thunderbolt/3.png");
            this.image = loadImage("images/thunderbolt/2.png");

        }
    }
    super.display();
}
}
