class Player extends MovableObject
{
  constructor(game, position, size, options)
  {
    if (typeof options === "object") {
      typeof options.isSolid === "boolean" ? this.isSolid = options.isSolid : options.isSolid = true;
    }
    super(game, position, size, options);


    this.weapon = new Weapon(this.game, this.position, new Vector(1, 1), 0.2, {}, "shotgun");

    this.isFacingRight = true;

    window.addEventListener('keydown',(e)=>this.setDirectionPress(e),false);
    window.addEventListener('keyup',(e)=>this.setDirectionRelease(e),false);
    window.addEventListener('click', (e)=>this.Fire1(e), false);
  }





  drawPlayer()
  {
    image(images.player, this.position.x, this.position.y);
  }

  setDirectionPress(e)
  {
    console.log("press: " + e.keyCode);
    if(e.keyCode == 68) // D
    {
      this.isFacingRight = true;
      this.setVelocity(new Vector(3, this.velocity.y));
    }
    else if (e.keyCode == 65) // A
    {
      this.isFacingRight = false;
      this.setVelocity(new Vector(-3, this.velocity.y));
    }
    else if(e.keyCode == 32) // Space
    {
      if(this.isGrounded)
      {
        this.setVelocity(new Vector(this.velocity.x, -2));
      }
    } else if (e.keyCode == 87) { //W
      if (this._onLadder) {
        this.setVelocity(new Vector(this.velocity.x, -3));
      }
    } else if (e.keyCode == 83) { //S
      if (this._onLadder) {
        this.setVelocity(new Vector(this.velocity.x, -3));
      }
    }
    else if(e.keyCode == 74) // J
    {
      
    }
  }

  setDirectionRelease(e)
  {
    if(e.keyCode == 68) // D
    {
      this.setVelocity(new Vector(0, this.velocity.y));
    }
    else if(e.keyCode == 65) // A
    {
      this.setVelocity(new Vector(0,this.velocity.y));
    }
  }

  Fire1(e)
  {
    if(typeof this.weapon != 'undefined' || this.weapon != null)
    {
      let dir;
      if(this.isFacingRight)
      {
        dir = new Vector(1, 0);
      }
      else
      {
        dir = new Vector(-1, 0);
      }

      this.weapon.shoot(this.position, dir, this.size);
    }
  }
}
