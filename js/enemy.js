class Enemy extends MovableObject{
  constructor(game, position, size, options) {
    super(game, position, size, options);

    if (typeof options === "object") {
      typeof options.isFaceingRight === "boolean" ? this.isFaceingRight = options.isFaceingRight: this.isFaceingRight = true;
      typeof options.enemyId === "number" ? this.enemyId = options.enemyId: this.enemyId = 0;
      typeof options.defaultSpeed === "number" ? this.defaultSpeed = options.defaultSpeed : this.defaultSpeed = 2;
    } else {
      this.isFaceingRight = true;
      this.enemyId = 0;
      this.defaultSpeed = 2;
    }



  }

  turnAround(){
    this.isFaceingRight = !this.isFaceingRight;

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
    const enemyObjs = this.game.findGameObjectsByTag("enemy");
    for (var i = 0; i < enemyObjs.length; i++) {
      if (enemyObjs[i].overlapsPosition(nextPos)) {
        //should turn
        this.turnAround();
        break;
      }
    }



  }

  canMoveThrough(gameObject)
  {
    if (gameObject.tags.indexOf("player") != -1) {
      return true;
    }else {
      return false;
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
