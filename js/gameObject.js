class GameObject{
  constructor(game, position, size, options){
    this.position = position;
    this.size = size;

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



}
