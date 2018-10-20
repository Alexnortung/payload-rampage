let game;
var images = {};

function preload()
{
  var dirt_img = loadImage("assets/dirt.png"); // 7
  var stone_img_1 = loadImage("assets/stone_1.png"); // 3
  var stone_img_2 = loadImage("assets/stone_2.png"); // 4
  var stone_img_3 = loadImage("assets/stone_3.png"); // 5
  var earth_bone_img = loadImage("assets/bone.png") // 6
  var grass_img = loadImage("assets/grass.png"); // 11
  var earth_tile_half_buttom_img = loadImage("assets/earth-tile-half-buttom.png"); // 8
  var earth_gem_img = loadImage("assets/earth_gem.png")// 10

  var crystal_top_left = loadImage("assets/objects/BaseGem/BaseGem_top_left.png"); // 18
  var crystal_top_right = loadImage("assets/objects/BaseGem/BaseGem_top_right.png"); // 19
  var crystal_bot_left = loadImage("assets/objects/BaseGem/BaseGem_bot_left.png"); // 23
  var crystal_bot_right = loadImage("assets/objects/BaseGem/BaseGem_bot_right.png"); // 24

  var portal_top_left = loadImage("assets/objects/Portal/Portal_top_left.png");
  var portal_top_right = loadImage("assets/objects/Portal/Portal_top_right.png");
  var portal_bot_left = loadImage("assets/objects/Portal/Portal_bot_left.png");
  var portal_bot_right = loadImage("assets/objects/Portal/Portal_bot_right.png");

  images =
  {
    dirt: dirt_img,
    stone_1: stone_img_1,
    stone_2: stone_img_2,
    stone_3: stone_img_3,
    bone: earth_bone_img,
    grass: grass_img,
    half_buttom: earth_tile_half_buttom_img,
    gem: earth_gem_img,
    
    crystal_top_left: crystal_top_left,
    crystal_top_right: crystal_top_right,
    crystal_bot_left: crystal_bot_left,
    crystal_bot_right: crystal_bot_right,

    portal_top_left: portal_top_left,
    portal_top_right: portal_top_right,
    portal_bot_left: portal_bot_left,
    portal_bot_right: portal_bot_right,
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

    this.mapbuilder = new MapBuilding(this, 2, images);

    this.player = new Player(this, new Vector(50, 415), new Vector(20, 32),{tags:["player"], health: 100});
    this.gravity = new Vector(0,0);

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

  findGameObjectByTag(searchTag)
  {
    for (let i = 0; i < this.gameObjects.length; i++)
    {
      let elem = this.gameObjects[i];
      for (let j = 0; j < elem.tags.length; j++)
      {
        let tag = elem.tags[j];
        
        if(tag == searchTag)
        {
          return elem;
        }
        
      }
      
    }
  }
}
