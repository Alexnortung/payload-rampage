class GameObject{
  constructor(game, position, size){
    this.position = position;
    this.size = size;

    this.game = game;
    game.gameObjects.push(this);

  }

  setPosition(position){
    this.position = position;
  }

  update(){
    
  }



}
