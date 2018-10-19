class MovableObject extends GameObject
{
    constructor(game, health, position, size, tag)
    {
        super(game, position, size, tag);
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
