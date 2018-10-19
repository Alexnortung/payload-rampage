class MovableObject extends GameObject
{
    constructor(game, health, position, size, options)
    {
        super(game, position, size, options);
        this.health = health;

        this.velocity = new Vector(0,0);
        this.maxVelocity = Infinity;
        this.isGrounded = false;
    }

    setVelocity(velocity)
    {
        this.velocity = velocity;
    }


    update(){
      //add gravity to velocity
      //check collisions
      //check max movement



      this.position = this.position.add(this.velocity);


    }

}
