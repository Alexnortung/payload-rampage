class Player extends MovableObject
{
  constructor(game, health, position, size, tag)
  {
    super(game, health, position, size, tag);

    this.weapon = new Weapon(this.game, this.position, new Vector(1, 1), 2, {});

    window.addEventListener('keydown',(e)=>this.setDirectionPress(e),false);
    window.addEventListener('keyup',(e)=>this.setDirectionRelease(e),false);
    window.addEventListener('click', (e)=>this.Fire1(e), false);
  }

  drawPlayer()
  {
    fill(0);
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
  }

  setDirectionPress(e)
  {
    console.log("press: " + e.keyCode);
    if(e.keyCode == 68)
    {
      this.setVelocity(new Vector(3, 0));
    }
    else if (e.keyCode == 65)
    {
      this.setVelocity(new Vector(-3, 0));
    }
    else if(e.keyCode == 32)
    {
      if(this.isGrounded)
      {
        this.setVelocity(new Vector(this.velocity.x, -2));
      }
    }
  }

  setDirectionRelease(e)
  {
    console.log("release: " + e.keyCode);
    if(e.keyCode == 68)
    {
      this.setVelocity(new Vector(0, 0));
    }
    else if(e.keyCode == 65)
    {
      this.setVelocity(new Vector(0,0));
    }
  }

  Fire1(e)
  {
    if(typeof this.weapon != 'undefined' || this.weapon != null)
    {
      this.weapon.shoot(this.position, new Vector(1,0));
    }
  }
}
