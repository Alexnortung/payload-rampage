class Player extends MovableObject
{
  constructor(game, health, position, size, tag)
  {
    super(game, health, position, size, tag);
  }

  drawPlayer()
  {
    fill(0);
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
  }
}
