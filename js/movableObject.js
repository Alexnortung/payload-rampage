class MovableObject extends GameObject
{
    constructor(health, position, size)
    {
        super(position, size);
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