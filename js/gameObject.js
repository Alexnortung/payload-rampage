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

  overlaps(otherGameObject, newPos){
    let pos = otherGameObject.position;
    if (typeof newPos === "object") {
      pos = newPos;
    }
    const isOverlapping = isRectangleOverlapping(this.position, this.position.add(this.size),
    pos, pos.add(otherGameObject.size));
    return isOverlapping;
  }

  overlapsPosition(position){
    const isOverlapping = isRectangleOverlapping(position, position, this.position, this.position.add(this.size));
    return isOverlapping;
  }

  hasTag(tag){
    const tagsToLower = this.tags.map(tagInArr => tagInArr.toLowerCase())
    return tagsToLower.indexOf(tag.toLowerCase()) != -1
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
