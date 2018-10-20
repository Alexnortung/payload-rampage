class Tile extends GameObject
{
    constructor(game, position, size, options)
    {
        super(game, position, size, options);
    }

    draw()
    {
        noStroke();
        fill(245);
        //var img = loadImage("assets/dirt.png");

        //image(img, this.position.x, this.position.y);

        rect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
}