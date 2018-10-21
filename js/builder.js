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
    const selectedTrapType = this.trapSelected._trapType
    // check if inside map
    //check if solid tile underneath if _floorTrap

    if (this.trapSelected._trapType === Trap._floorTrap) {
      // get position on bottom
      const botPos = new Vector(this.position.x, this.position.y + this.trapSelected._size.y);
      let solidBlockatBotPos = false;
      const gameObjectsAtBotPos = this.game.getGameObjectsAtExactPosition(botPos);
      // console.log(gameObjectsAtBotPos, botPos, this.position);
      gameObjectsAtBotPos.forEach((gameObj) => {
        if (gameObj.isSolid && gameObj.hasTag("tile")) {
          solidBlockatBotPos = true;
        }
      });
      if (!solidBlockatBotPos) {
        // console.log("no solid block");
        return false
      }
    }

    //check if there is already a trap
    const gameObjectsAtPos = this.game.getGameObjectsAtExactPosition(this.position);
    // console.log(gameObjectsAtPos);
    for (let i = 0; i < gameObjectsAtPos.length; i++) {
      // console.log(gameObjectsAtPos[i].trapType);
      if (gameObjectsAtPos[i].trapType == selectedTrapType) {
        return false;
      }

    }

    //check if it does not overlap solid tiles
    // console.log(overlaps);
    for (let i = 0; i < overlaps.length; i++) {
      const gameObj = overlaps[i];
      if (gameObj._trapType == this.trapSelected._trapType) {
        return false;
      }
      if ((overlaps[i].isSolid && overlaps[i].hasTag("tile")) || gameObj.hasTag("core") || gameObj.hasTag("portal")) {
        console.log(overlaps[i]);
        return false;
      }

    }




    return true;

  }

  spendGold(){
    this.game.spendGold(this.selectedTrap._defaultCost);
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
