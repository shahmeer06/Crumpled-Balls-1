class Trash{
    constructor(x, y, width, height, angle){
        var options = {
            'isStatic' : true,
            'restitution' : .3, 
            
            'friction' : .5,
            'density' : 1.2
        }

        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(world, this.body)
    }

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("purple")
        rect(pos.x, pos.y, this.width, this.height);  
    }
}