class Player extends MoveableObject
{
  constructor(health, position)
  {
    super(health, position);
  }

  drawPlayer()
  {
    rect(this.position.x, this.position.y, 100, 100);
  }
}
