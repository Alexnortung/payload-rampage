class ShotgunBullet extends Projectile {
  constructor(game, position, size, options, velocity, damage) {
    super(game, position, size, options, velocity, damage);

  }

  onCollide(gameObject){
    
    if (gameObject.isSolid && gameObject.tags.indexOf('player') == -1)
    {
      this.destroy();
    }
  }
}
