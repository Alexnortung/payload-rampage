class Enemy extends MovableObject{
  constructor(game, position, size, options) {
    super(game, position, size, options);

    if (typeof options === "object") {
      typeof options.isFaceingRight === "boolean" ? this.isFaceingRight = options.isFaceingRight : this.isFaceingRight = true;
      typeof options.enemyId === "number" ? this.enemyId = options.enemyId: this.enemyId = 0;
      typeof options.defaultSpeed === "number" ? this.defaultSpeed = options.defaultSpeed : this.defaultSpeed = 2;
      typeof options.damage === "number" ? this.damage = options.damage : this.damage = 1;
    } else {
      this.isFaceingRight = true;
      this.enemyId = 0;
      this.defaultSpeed = 2;
      this.damage = 1;
    }



  }

  turnAround(){
    this.isFaceingRight = !this.isFaceingRight;

  }

  dealDamage(damage){
    // console.log("took damage");
    MovableObject.prototype.dealDamage.call(this,damage);
  }



  update() {
    //setvelocity
    //calculate speed
    const speedX = this.isFaceingRight ? this.defaultSpeed : -this.defaultSpeed;
    this.setVelocity(new Vector(speedX, this.velocity.y));



    MovableObject.prototype.update.call(this);
    //check if they should turn around
    //get new pos
    const nextPos = this.position.add(new Vector(speedX, 0));
    // console.log(nextPos, this.position);
    // console.log(nextPos, this.position);
    const gameObjs = this.game.gameObjects;
    for (var i = 0; i < gameObjs.length; i++) {
      if (gameObjs[i] === this)  continue;

      // console.log(gameObjs[i].isSolid , this.canMoveThrough(gameObjs[i]) , gameObjs[i].overlapsPosition(nextPos));
      if (gameObjs[i].isSolid && !this.canMoveThrough(gameObjs[i]) && gameObjs[i].overlaps(this, nextPos)) {
        //should turn
        this.turnAround();
        // console.log("turning around", gameObjs[i]);
        break;
      }
    }

    if(this.health <= 0)
    {
      this.destroy();
      this.game.gold += Math.floor(random(50, 200));
    }
  }

  canMoveThrough(gameObject)
  {
    if (gameObject.tags.indexOf("player") != -1 || gameObject.hasTag("Core")) {
      return true;
    }else {
      return false;
    }
  }

  onCollide(gameObject)
  {
    if(gameObject.hasTag('bullet'))
    {
      console.log(this.health);
      this.health -= gameObject.damage;
      gameObject.destroy();
      new FloatingText(this.game, new Vector(this.position.x, this.position.y - random(25, 75)), new Vector(-0.15, -0.30), new Vector(0, 0), {damageAmount: gameObject.damage, maxTick: 60,});
      //console.log(gameObject);
    }
  }



  draw()
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

    //animation(images.monster_walk, ...scalePos);
    //image(images.enemy_1_lvl_1, ...scalePos);
    pop();
  }

}
