class Projectile extends MovableObject{
  constructor(game, position, size, options, velocity, damage){
    if (typeof options === "object") {
      typeof options.hasGrivity !== "boolean" ? options.hasGrivity = false : options.hasGrivity = options.hasGrivity;
    }else {
      options = {
        hasGrivity: true,
        tags: ['projectile']
      }

    }

    super(game, position, size, options);

    this.velocity = velocity;
    this.damage = damage;
  }

  draw()
  {
    fill(0);
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
  }
}
