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



  }

  canMoveThrough(gameObject)
  {
    if (gameObject.tags.indexOf("player") != -1) {
      return true;
    }else {
      return false;
    }
  }

  draw(){

  }

}
