class ShotgunBullet extends Projectile {
  constructor(game, position, size, options, velocity, damage) {
    super(game, position, size, options, velocity, damage);

  }

  onCollide(gameObject){
    if (gameObject.isSolid) {
      this.destroy();
    }
  }
}
