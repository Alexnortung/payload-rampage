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
    } else {
      this.isSolid = false;
      this.tags = [];
    }

  }

  setPosition(position){
    this.position = position;
  }

  update(){

  }

  get centerPosition(){
    const center = this.position.add(this.size.divide(2));
    return center;
  }

  set centerPosition(position){
    const newPos = position.subtract(this.size.divide(2));
    this.position = newPos;
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
    const tagsToLower = this.tags.map(tagInArr =>{
      if (typeof tagInArr === "string") {
        return tagInArr.toLowerCase();
      } else {
        // console.log(tagInArr);
        return "";
      }
    });
    return tagsToLower.indexOf(tag.toLowerCase()) != -1
  }

  destroy(){
    return this.game.destroyGameObject(this.gameObjectId);
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
