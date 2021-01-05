class Paper{
    constructor(x, y, radius){
        var options = {
            'isStatic' : false,
            'restitution' : .3, 
            
            'friction' : .5,
            'density' : 1.2

        }
       
       console.log("after declaring the testImage1 variable")
        this.body = Bodies.rectangle(x,y,width, height ,options)
       this.radius = radius
        console.log(("Before loading the image"))
       // this.image = loadImage('paperimg.png');
       this.testImage1 = loadImage("paperimg.png")
       console.log("after loading the image")
        
            
        
      
        
       
        
        World.add(world, this.body);
     
    }

    display(){
        var sphere = this.body.position
        push()
        translate(sphere.x, sphere.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        console.log(sphere.y)
        image(this.testImage1, 0, 0, this.radius, this.radius) 
        pop()
    }

} 