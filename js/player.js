class Player extends MoveableObject
{
  constructor(health, position)
  {
    super(health, position);
  }

  drawPlayer()
  {
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
  }
}
