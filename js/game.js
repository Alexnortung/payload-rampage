let game;
var images = {};

function preload()
{
  var dirt_img = loadImage("assets/dirt.png");
  var stone_img = loadImage("assets/stone.png");
  var grass_img = loadImage("assets/grass.png");
  images =
  {
    dirt: dirt_img,
    stone: stone_img,
    grass: grass_img,
  };
}


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

    this.mapbuilder = new MapBuilding(this, images);

    this.player = new Player(this, new Vector(50, 415), new Vector(20, 32),{tags:["player"], health: 100});
    this.gravity = new Vector(0,0.2);

    this.mapbuilder.createMap();

    setInterval(()=>this.update(), 16);
  }

  update()
  {
    background(255);
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
