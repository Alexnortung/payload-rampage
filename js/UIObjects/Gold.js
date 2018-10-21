class Gold extends UI
{
    constructor(game, position, size, options)
    {
        super(game, position, size, options);

    }

    draw()
    {
        textFont(font);
        textSize(32);
        text("Gold: " + this.game.gold, this.position.x, this.position.y);
    }
}