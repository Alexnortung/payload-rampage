let game;
function setup()
{
  createCanvas(600, 600);
  background(52);
  game = new TowerDefenseGame();
}

class TowerDefenseGame {
  constructor(){
    this.gold = 100;
    this.gameObjects = [];

    this.player = new Player(this, 100, new Vector(50, 50), new Vector(10, 10), ['player']);

    setInterval(()=>this.update(), 16);
  }

  update()
  {
    background(52);
    for (let i = 0; i < this.gameObjects.length; i++)
    {
      this.gameObjects[i].update();
    }

    this.player.drawPlayer();
  }

  draw() {

  }
}
