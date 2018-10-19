class Player extends MovableObject
{
  constructor(health, position, size, tag)
  {
    super(health, position, size, tag);
  }

  drawPlayer()
  {
    fill(0);
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
  }
}
