class ShotgunBullet extends Projectile {
  constructor(game, position, size, options, velocity, damage) {
    super(game, position, size, options, velocity, damage);
    if (typeof options === "object") {
      typeof options.hasGravity === "boolean" ? this.hasGravity = options.hasGravity : this.hasGravity = false;
    } else {
      this.hasGravity = false;

    }

  }

  onCollide(gameObject){
    if (gameObject.isSolid) {
      this.destroy();
    }
  }
}
