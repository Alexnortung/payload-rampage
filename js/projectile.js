class Projectile extends MovableObject{
  constructor(game, position, size, options, velocity, damage){
    if (typeof options === "object") {
      typeof options.hasGrivity !== "boolean" ? options.hasGrivity = false : options.hasGrivity = options.hasGrivity;
      typeof options.canHasGravity === "boolean" ? options.canHasGravity = options.canHasGravity : options.canHasGravity = false;
    }else {
      options = {
        hasGrivity: false,
        canHasGravity: false,
        tags: ['projectile'],
      }
    }

    super(game, position, size, options);

    if(typeof options === "object")
    {
      typeof options.damageDropoff === "number" ? this.damageDropoff = options.damageDropoff : this.damageDropoff = 10;
      typeof options.minDamage === "number" ? this.minDamage = options.minDamage : this.minDamage = 100;
    }
    else
    {
      this.minDamage = 100;
      this.damageDropoff = 10;
    }

    this.velocity = velocity;
    this.damage = damage;
  }

  update()
  {
    MovableObject.prototype.update.call(this);
    // console.log(this.damage);
    this.damage -= this.damageDropoff;
    if(this.damage <= this.minDamage)
    {
      this.damage = this.minDamage;
    }
  }

  draw()
  {
    fill(255);
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
  }




}
