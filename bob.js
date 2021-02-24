class bob{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:1,
            friction:0.5,
            density:1.9
        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(x,y,this.r/2,options)
        World.add(world,this.body)
    }
    display()
    {
        var paperpos = this.body.position;

        push()
        translate(paperpos.x,paperpos.y)
        ellipseMode(RADIUS)
        fill("magenta")
        ellipse(0,0,this.r/2,this.r/2);
        pop()
    }
}