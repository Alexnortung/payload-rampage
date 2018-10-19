class Player extends MovableObject
{
  constructor(game, position, size, options)
  {
    super(game, position, size, options);

    window.addEventListener('keydown',(e)=>this.setDirection(e),false);
  }

  drawPlayer()
  {
    fill(0);
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
  }

  setDirection(e)
  {
    console.log(e.keyCode);
    if(e.keyCode == 68)
    {
      this.setVelocity(new Vector(3, 0));
    }
    else if (e.keyCode == 65)
    {
      this.setVelocity(new Vector(-3, 0));
    }
  }
}
