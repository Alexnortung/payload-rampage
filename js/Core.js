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
        console.log(this.Tiles);
    }
}