class Paper{
    constructor(x,y,radius) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.radius=radius;
        this.ball = Bodies.circle(x, y, radius, options);
        World.add(world, this.ball);
        console.log(this.ball);
    }
    display(){
        var pos = this.ball.position;
        ellipse(pos.x, pos.y, this.radius);
      }
    }
        