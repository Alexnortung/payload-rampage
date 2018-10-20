class MovableObject extends GameObject
{
    constructor(game, position,size, options)
    {
        super(game, position, size, options);

        this.velocity = new Vector(0,0);
        this.maxVelocity = Infinity;
        if (typeof options === "object") {
          typeof options.health? this.health = options.health: this.health = 100;
        }

        this.isGrounded = false;

    }

    setVelocity(velocity)
    {
        this.velocity = velocity;
    }


    update(){
      //add gravity to velocity
      this.velocity.addTo(game.gravity);

      //check collisions
      const collisions = this.game.checkCollisions(this);
      for (var i = 0; i < collisions.length; i++) {
        if (collisions[i].x) {
          this.velocity.x = 0;
        }
        if (collisions[i].y) {
          this.velocity.y = 0;
        }
      }


      //check max movement



      this.position = this.position.add(this.velocity);


    }

}
