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
    //console.log(gameObject.tags);
    if (gameObject.isSolid && gameObject.tags.indexOf('player') == -1)
    {
      this.destroy();
    }
  }
}
