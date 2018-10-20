class CoreCrystal extends GameObject
{
    constructor(game, position, size, options, firstTile)
    {
        super(game, position, size, options);
        this.Tiles = [firstTile];
    }

    add(Tile)
    {
        this.Tiles.push(Tile);
        //console.log(this.Tiles);
    }

    onCollide(gameObject)
    {
        let tag_IsEnemy = false;
        console.log("Collided");
        for (let i = 0; i < gameObject.tags.length; i++)
        {
            let tag = gameObject.tags[i];

            if(tag == 'Enemey')
            {
                tag_IsEnemy = true;
            }
            
        }

        if(tag_IsEnemy)
        {
            let damage = 0;

            if(typeof gameObject.damage == 'undefined')
            {
                damage = 1;
            }
            else
            {
                damage = gameObject.damage;
            }

            this.game.health -= damage;
            gameObject.destroy();
        }
    }
}