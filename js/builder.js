class Builder extends GameObject {
  constructor(game) {
    const defaultTrap = SpikeTrap;
    const defaultPos = new Vector(0,0)
    super(game,defaultPos, defaultTrap._size, options);
    this.game = game;
    this.trapSelected = defaultTrap;
    this.active = false;

  }

  selectTrap(trap){
    this.trapSelected = trap;
    this.size = this.trapSelected._size;
  }

  canAffordTrap(trap){
    if (this.game.gold >= trap) {
      return true;
    }

    return false;
  }

  isPositionBuildable(){
    const overlaps = game.findOverlaps(this);
    // check if inside map
    //check if solid tile underneath if SpikeTrap
    //check if it does not overlap solid tiles
    for (let i = 0; i < overlaps.length; i++) {
      if (overlaps[i].isSolid && overlaps[i].hasTag("tile")) {
        return false;
      }

    }


    return true;

  }

  buildTrap(){
    if (this.canAffordTrap(this.trapSelected) && this.isPositionBuildable()) {
      //yes build it
    }
    return false;
  }

  draw(){
    if (this.game.debug) {
      fill(255, 255, 255, 0);
      stroke(255, 127, 0)
      rect(this.position.x, this.position.y, this.size.x, this.size.y);

    }
  }

  update(){

  }

}
