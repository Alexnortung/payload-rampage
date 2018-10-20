class CoreCrystal extends GameObject
{
    constructor(game, position, size, options, firstTile)
    {
        super(game, position, size, options);
        this.Tiles = [firstTile];

        let trigger = new AttachedTrigger(game, this, {});

        trigger.onEnter = function (gameObject)
        {
            if(gameObject.hasTag("Enemey"))
            {
                gameObject.destroy();
                this.game.health -= gameObject.damage;
            }
        }
    }

    add(Tile)
    {
        this.Tiles.push(Tile);
        //console.log(this.Tiles);
    }
}