let game;
function setup()
{
  createCanvas(640, 640);
  background(52);
  game = new TowerDefenseGame();
}

class TowerDefenseGame {
  constructor(){
    this.gold = 100;
    this.gameObjects = [];

    this.mapbuilder = new MapBuilding(this);

    this.player = new Player(this, new Vector(50, 50), new Vector(10, 10),{tags:["player"], health: 100});
    this.gravity = new Vector(0,0);

    this.mapbuilder.createMap();

    setInterval(()=>this.update(), 16);
  }

  update()
  {
    //background(52);
    for (let i = 0; i < this.gameObjects.length; i++)
    {
      this.gameObjects[i].update();

      if(typeof this.gameObjects[i].draw == 'function')
      {
        this.gameObjects[i].draw();
      }
    }

    this.draw();
  }

  draw()
  {
    this.player.drawPlayer();
  }
}
