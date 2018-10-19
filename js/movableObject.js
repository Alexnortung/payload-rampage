class MovableObject extends GameObject
{
    constructor(health, position, size, tag)
    {
        super(position, size, tag);
        this.health = health;
        
        this.velocity = new Vector(0,0);
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