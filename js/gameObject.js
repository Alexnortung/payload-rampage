class GameObject{
  constructor(game, position, size, options){
    this.position = position;
    this.size = size;
    this.gameObjectId = game.getNewId();

    this.game = game;
    game.gameObjects.push(this);

    if (typeof options === "object") {
      typeof options.isSolid === "boolean" ? this.isSolid = options.isSolid : this.isSolid = false;
      typeof options.tags === "object" ? this.tags = options.tags : this.tags = [];
    }

  }

  setPosition(position){
    this.position = position;
  }

  update(){

  }

  overlaps(otherGameObject){
    const isOverlapping = isRectangleOverlapping(this.position, this.position.add(this.size),
    otherGameObject.position, otherGameObject.position.add(otherGameObject.size));
    return isOverlapping;
  }

  overlapsPosition(position){
    const isOverlapping = isPointInsideRectangle(position, this.position, this.position.add(this.size));
    return isOverlapping;
  }

  destroy(){
    this.game.destroyGameObject(this.id);
  }

  debug()
  {
    if(this.isSolid)
    {
      fill(255, 255, 255, 0);
      stroke(255, 0, 0);

      rect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
  }



}
