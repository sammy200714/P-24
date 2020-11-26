class Paper{
    constructor(x, y, rad){

        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
        }

        this.body = Bodies.circle(x,y,rad, options);
        World.add(world,this.body);

        this.radius = rad
    }
    present(){
        var pos = this.body.position;
        var ang = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(ang);
        fill("purple");
        ellipseMode(CENTER);
        ellipse(0,0,this.radius)
        pop();
    }


}