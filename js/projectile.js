class Projectile extends MovableObject{
  constructor(game, position, size, velocity, damage){
    super(game, position, size, {tag: ['projectile']});

    this.velocity = velocity;
    this.damage = damage;
  }

  draw()
  {
    fill(0);
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
  }
}
