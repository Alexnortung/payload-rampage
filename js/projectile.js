class Projectile extends MovableObject{
  constructor(game, health, position, size, tag, velocity){
    super(game, health, position, size, tag);
    this.velocity = velocity;
  }
}
