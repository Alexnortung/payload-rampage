class Projectile extends MovableObject{
  constructor(game, health, position, size, options, velocity){
    super(game, health, position, size, options);
    this.velocity = velocity;
  }
}
