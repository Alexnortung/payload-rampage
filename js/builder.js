class Builder extends GameObject {
  constructor(game) {
    const defaultTrap = SpikeTrap;
    const defaultPos = new Vector(0,0)
    super(game,defaultPos, defaultTrap._size);
    this.game = game;
    this.trapSelected = defaultTrap;
    this.active = true;

  }

  selectTrap(trap){
    this.trapSelected = trap;
    this.size = this.trapSelected._size;
  }

  canAffordTrap(trap){
    if (this.game.gold >= trap._defaultCost) {
      return true;
    }

    return false;
  }

  isPositionBuildable(){
    const overlaps = game.findOverlaps(this);
    // check if inside map
    //check if solid tile underneath if SpikeTrap
    //check if it does not overlap solid tiles
    console.log(overlaps);
    for (let i = 0; i < overlaps.length; i++) {
      if (overlaps[i].isSolid && overlaps[i].hasTag("tile")) {
        console.log(overlaps[i]);
        return false;
      }

    }


    return true;

  }

  buildTrap(){
  // console.log("trying to build trap");
    if (this.canAffordTrap(this.trapSelected) && this.isPositionBuildable()) {
      // console.log("building trap");
      //yes build it
      new this.trapSelected(this.game, this.position);

      return true;
    }
    return false;
  }

  draw(){
    if (this.game.debug) {
      // console.log("drawing builder");
      push();
      fill(255, 255, 255, 0);
      stroke(255, 127, 0);


      rect(this.position.x, this.position.y, this.size.x, this.size.y);
      pop();
    }
  }

  update(){
    //set position = to mouse pos
    const mousePos = (new Vector(mouseX, mouseY)).divideBy(32);
    if (true) {

    }
    const blockPosition = (new Vector(Math.floor(mousePos.x), Math.floor(mousePos.y))).multiplyBy(32);
    let newPos = this.position;
    // console.log(this.trapSelected._trapType , Trap._floorTrap);
    if (this.trapSelected._trapType == Trap._floorTrap) {
      newPos = new Vector(blockPosition.x, blockPosition.y + this.trapSelected._size.y);
    }
    // console.log(newPos);

    this.position = newPos;


  }

  mousePress(){
    // console.log("builder mousepress");
    if (this.active) {
      this.buildTrap();
    }
  }


}
