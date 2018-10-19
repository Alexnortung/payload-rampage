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

    this.player = new Player(100, new Vector(50, 50), new Vector(10, 10), 'Player');

    setInterval(()=>this.update(), 16);
  }

  update()
  {
    background(52);
    this.player.drawPlayer();
  }

  draw() {

  }
}
