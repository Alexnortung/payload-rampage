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
        console.log("entered ladders");
      } else if (ladders.length == 0 && this._onLadder) {
        this.leaveLadder();
        console.log("left ladders");
      }


      //check max movement



      this.position = this.position.add(this.velocity);


    }

}
