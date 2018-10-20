class CoreCrystal extends GameObject
{
    constructor(game, position, size, options, firstTile)
    {
        super(game, position, size, options);
        this.Tiles = [firstTile];
        this.health = 100;

        let trigger = new AttachedTrigger(game, this, {});

        trigger.onEnter =  (gameObject) =>
        {
            if(gameObject.hasTag("enemy"))
            {
                console.log("world");
                gameObject.destroy();
                this.health -= gameObject.damage;
            }
        }
    }

    update()
    {
        if(this.health < 0)
        {
            this.game.gameOver = true;
        }
    }

    add(Tile)
    {
        this.Tiles.push(Tile);
        //console.log(this.Tiles);
    }
}