class Projectile extends MovableObject{
  constructor(game, position, size, velocity, damage){
    if (typeof options === "object") {
      if (typeof options.hasGrivity == "boolean") {
        this.hasGrivity = options.hasGrivity;

      }else {
        this.hasGrivity = false;
        options.hasGrivity = this.hasGrivity;

      }
    }
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
