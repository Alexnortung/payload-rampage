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
    //window.addEventListener('click', (e)=>this.Fire1(e), false);
  }


  canMoveThrough(gameObject){
    if (gameObject.hasTag("enemy")) {
      return true;
    }

    return false;
  }


  drawPlayer()
  {
    push();
    translate(this.position.x, this.position.y);
    let scaleVals = [1,1];
    let scalePos = [0,0]
    if (!this.isFacingRight) {
      scaleVals = [-1,1];
      scalePos = [-this.size.x,0];
    }
    scale(...scaleVals);
    image(images.player, ...scalePos);
    pop();
  }

  setDirectionPress(e)
  {
    // e.preventDefault();
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
        this.setVelocity(new Vector(this.velocity.x, -5));
      }
      return false;
    } else if (e.keyCode == 87) { //W
      if (this._onLadder) {
        this.setVelocity(new Vector(this.velocity.x, -3));
      }
    } else if (e.keyCode == 83) { //S
      if (this._onLadder) {
        this.setVelocity(new Vector(this.velocity.x, 3));
      }
    }
    else if(e.keyCode == 74) // J
    {
      this.Fire1();
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
    } else if (e.keyCode == 87 || e.keyCode == 83) { // W, S
      if (this._onLadder) {
        this.setVelocity(new Vector(this.velocity.x, 0));
      }
    }
  }

  Fire1()
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
