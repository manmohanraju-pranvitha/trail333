class Tree{
    constructor(x,y){
        var option={
            isStatic:true
            
        }
        this.body=Bodies.rectangle(x,y,450,600,option);
        this.width=width;
        this.height=height;
        this.image=loadImage("tree.png");
        
        World.add(world,this.body);
    }
      display(){
        var pos=this.body.position;
        imageMode(CENTER);
        fill("black");
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}