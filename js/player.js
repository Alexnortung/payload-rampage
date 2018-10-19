class Player extends MovableObject
{
  constructor(health, position, size)
  {
    super(health, position, size);
  }

  drawPlayer()
  {
    fill(0);
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
  }
}
