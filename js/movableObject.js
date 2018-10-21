class MovableObject extends GameObject
{
    constructor(game, position,size, options)
    {
        super(game, position, size, options);
        this._onLadder = false;

        this.velocity = new Vector(0,0);
        this.maxVelocity = Infinity;
        if (typeof options === "object") {
          typeof options.health === "number"? this.health = options.health: this.health = 100;
          typeof options.hasGravity === "boolean"? this.hasGravity = options.hasGravity : this.hasGravity = true;
          typeof options.canHasGravity === "boolean" ? this.canHasGravity = options.canHasGravity : this.canHasGravity = true;
        }

        this.isGrounded = false;

    }

    setVelocity(velocity)
    {
        this.velocity = velocity;
    }

    enterLadder(){
      this.hasGravity = false;
      this._onLadder = true;
    }

    leaveLadder() {
      if (this.canHasGravity) {
        this.hasGravity = true;

      }
      this._onLadder = false;

    }

    canMoveThrough(GameObject){
      return false;
    }


    update(){
      //add gravity to velocity
      if (this.hasGravity) {
        this.velocity.addTo(game.gravity);

      }


      //check collisions
      const collisions = this.game.checkCollisions(this);
      if(collisions.length == 0){
        this.isGrounded = false;
      }
      for (var i = 0; i < collisions.length; i++) {
        //set velocity
        if (this.isSolid && !this.canMoveThrough(collisions[i].elem)  ) {
          if (collisions[i].x) {
            this.velocity.x = 0;
          }
          if (collisions[i].y) {
            this.velocity.y = 0;
          }

        }

        //call oncollide
        if (typeof collisions[i].elem.onCollide === "function") {
          collisions[i].elem.onCollide(this);
        }
        if (typeof this.onCollide === "function") {
          this.onCollide(collisions[i].elem);
        }

      }

      //check ladder
      const ladders = game.checkLadder(this);
      // console.log(ladders);
      if (ladders.length >= 1 && !this._onLadder) {
        this.enterLadder();
        // console.log("entered ladders");
      } else if (ladders.length == 0 && this._onLadder) {
        this.leaveLadder();
        // console.log("left ladders");
      }


      //check max movement



      this.position = this.position.add(this.velocity);
      this.position = new Vector(Math.round(this.position.x), Math.round(this.position.y));
      // console.time("stuck");
      // console.log("stuck check");
      if (this.isStuck()) {
        this.unStuck();
      }
      // console.timeEnd("stuck");


    }

    dealDamage(damage){
      // console.log("took damage again");
      this.health -= damage;
      new FloatingText(this.game, new Vector(this.position.x, this.position.y - random(25, 75)), new Vector(-0.15, -0.30), new Vector(0, 0), {damageAmount: damage, maxTick: 60,});
      if (this.health <= 0) {
        this.onBelowZeroHealth();

      }

    }

    onBelowZeroHealth(){

    }

    isStuck(){
      const overlaps = game.findOverlaps(this);
      for (let i = 0; i < overlaps.length; i++) {
        if (overlaps[i].isSolid && !this.canMoveThrough(overlaps[i])) {
          return true;
        }

      }
      return false;
    }

    unStuck(){
      //get overlaps
      const overlaps = game.findOverlaps(this);
      for (let i = 0; i < overlaps.length; i++) {
        const gameObj = overlaps[i];
        if (gameObj.isSolid && !this.canMoveThrough(overlaps[i])) {
          // diff from gameObj to this
          const diff = this.position.subtract(gameObj.position);
          const diffCenter = this.centerPosition.subtract(gameObj.centerPosition);
          const positiveX = (diffCenter.x > 0);
          const positiveY = (diffCenter.y > 0);
          // console.log(diff, positiveX);
          let moveVector;

          if (Math.abs(diff.x) > Math.abs(diff.y)) {
            //move x
            if (positiveX) {
              //move right
              //get rightPos of this
              const rightPos = gameObj.position.add(new Vector(gameObj.size.x, 0));
              //set right pos to equal position.x of gameObj
              //get diff from rightpos(this) to position.x of gameObj
              const newDiff = rightPos.subtract(this.position);
              moveVector = newDiff;


            } else {
              //move left

              const rightPos = this.position.add(new Vector(this.size.x, 0));

              const newDiff = gameObj.position.subtract(rightPos);
              moveVector = newDiff;

            }
          } else {
            //move y
            if (positiveY) {
              //move down
              //get bottom pos of game object
              const bottomPos = gameObj.position.add(new Vector(0, gameObj.size.y))
              //set the bottom pos.y to equal position.y of this
              //get diff from bottompos to pos of this
              const newDiff = this.position.subtract(bottomPos);
              moveVector = newDiff;
            }else {
              //move up
              //get bottom pos of this object
              const bottomPos = this.position.add(new Vector(0, this.size.y))
              //set the bottom pos.y to equal position.y of gameObj
              //get diff from bottompos to pos of gameObj
              const newDiff = gameObj.position.subtract(bottomPos);
              moveVector = newDiff;
            }

          }


          this.position.addTo(moveVector);

        }

      }

    }

}
