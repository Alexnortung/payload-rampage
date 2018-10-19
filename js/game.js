function setup()
{
  createCanvas(600, 600);
  background(52);

  var game = new TowerDefenseGame();
}

class TowerDefenseGame {
  constructor(){
    this.gold = 100;
    this.gameObject = [];

    this.player = new Player(100, new Vector(50, 50), new Vector(10, 10));

    setInterval(this.update, 16);
  }

  update(){
    this.player.drawPlayer();
  }

  draw() {

  }
}
