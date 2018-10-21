class Life extends UI
{
    constructor(game, position, size, options)
    {
        super(game, position, size, options);

    }

    draw()
    {
        textFont(font);
        textSize(16);
        let core = this.game.findGameObjectByTag("Core");
        let hp = core.health;
        text("Health " + hp, this.position.x, this.position.y);
    }
}
