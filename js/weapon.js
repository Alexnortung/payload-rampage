class Weapon extends GameObject
{
    constructor(game, position, size, shootingTime, options)
    {
        super(game, position, size, options)
        this.game = game;
        this.shootingTime = shootingTime;
        this.lastShot = 0;
    }

    shoot(pos, dir)
    {
        var currentTime = Math.floor(Date.now() / 1000);
        if((currentTime - this.lastShot) > this.shootingTime)
        {
            new Projectile(this.game, pos, new Vector(2, 2), dir, 2);
        }
    }


}