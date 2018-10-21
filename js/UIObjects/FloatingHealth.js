class FloatingHealth extends UI
{
    constructor(game, position, size, parent, options)
    {
        super(game, position, size, options);

        this.parent = parent;
        this.maxHealth = this.parent.health;
    }

    draw()
    {
        this.position = this.parent.position;
        let newPos = new Vector(this.position.x, this.position.y - 10);
        fill(255, 0, 0, 255);
        rect(newPos.x, newPos.y, this.parent.size.x, 5);

        let getPercentage = this.parent.health / this.maxHealth;

        let life = this.parent.size.x * getPercentage;

        //console.log(this.parent);

        fill(0, 255, 0, 255);
        rect(newPos.x, newPos.y, life, 5);
    }
}