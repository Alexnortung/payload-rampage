class GameObject{
  constructor(game, position, size, options){
    this.position = position;
    this.size = size;
    this.id = game.getNewId();

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

  destroy(){

  }



}
