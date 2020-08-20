class Paper{
    constructor(x, y, radius){
        var options = {
            'isStatic' : false,
            'restitution' : .3, 
            
            'friction' : .5,
            'density' : 1.2

        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius;
        World.add(world, this.body)
     
    }

    display(){
        var sphere = this.body.position
        ellipseMode(RADIUS);
        ellipse(sphere.x, sphere.y, 15, 15)   
    }

}