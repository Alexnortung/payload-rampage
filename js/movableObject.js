class MovableObject extends GameObject
{
    constructor(health, position)
    {
        super(position);
        this.health = health;
        
        this.velocity = {x: x, y: y};
        this.maxVelocity = Infinity;
    }

    setVelocity(velocity)
    {
        this.velocity = velocity;
    }

    move()
    {
        this.position = this.position.add(this.velocity);
    }


}