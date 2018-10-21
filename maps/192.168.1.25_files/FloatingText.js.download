class FloatingText extends UI
{
    constructor(game, position, dir, size, options)
    {
        super(game, position, size, options);

        if (typeof options == 'object')
        {
            typeof options.damageAmount ? this.damageAmount = options.damageAmount : this.damageAmount = 0;
            typeof options.maxTick ? this.maxTick = options.maxTick : this.maxTick = 60;
        }
        else
        {
            this.maxTick = 60;
        }

        this.BeginTick = this.game.tick;
        this.dir = dir;
    }

    update()
    {
        if(this.game.tick - this.BeginTick > this.maxTick)
        {
            this.destroy();
        }
        
        this.position = this.position.addTo(this.dir);
    }

    draw()
    {
        text(this.damageAmount, this.position.x, this.position.y);
    }
    
}