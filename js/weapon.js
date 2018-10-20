class Weapon extends GameObject
{
    constructor(game, position, size, shootingTime, options, shottype)
    {
        super(game, position, size, options)
        this.game = game;
        this.shootingTime = shootingTime;
        this.lastShot = 0;
        this.shotType = shottype;
    }

    shoot(pos, dir, size)
    {
        var currentTime = Math.floor(Date.now() / 1000);
        if((currentTime - this.lastShot) > this.shootingTime)
        {
            let position = this.newPos(pos, size);
            this.createShot(position, dir);
            this.lastShot = currentTime;
        }
    }

    newPos(pos, size)
    {
        let playersize = pos.y + (size.y / 2);
        return new Vector(pos.x, playersize);
    }

    createShot(pos, dir)
    {
        switch (this.shotType)
        {
            case 'standard':
                this.standardShotInstanceiate(pos, dir);
                break;

            case 'shotgun':
                this.shotgunShotInstanciate(pos, dir);
                break;
        }
    }

    standardShotInstanceiate(pos, dir)
    {
        new Projectile(this.game, pos, new Vector(2, 2), {}, dir, 2);
    }

    shotgunShotInstanciate(pos, dir)
    {
        let dirUp = new Vector(dir.x, dir.y + random(-0.5, 0.5));
        let dirStraight = new Vector(dir.x, dir.y + random(-0.5, 0.5));
        let dirDown = new Vector(dir.x, dir.y + random(-0.5,0.5));

        new Projectile(this.game, pos, new Vector(2, 2), {}, dirStraight, 1);
        new Projectile(this.game, pos, new Vector(2, 2), {}, dirUp, 1);
        new Projectile(this.game, pos, new Vector(2, 2), {}, dirDown, 1);
    }

}
