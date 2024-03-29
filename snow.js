class snow {
    constructor(x, y, width, height, angle) {
        var options = {
            restitution: 1,
            friction: 1,
            density: 4
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 20, 20);
        pop();
    }

}