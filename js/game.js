let game;
var images = {};

function preload()
{

  const player_img = loadImage("assets/sprites/Player1-v1.png");

  var dirt_img = loadImage("assets/tiles/dirt.png"); // 7
  var stone_img_1 = loadImage("assets/tiles/stone_1.png"); // 3
  var stone_img_2 = loadImage("assets/tiles/stone_2.png"); // 4
  var stone_img_3 = loadImage("assets/tiles/stone_3.png"); // 5
  var earth_bone_img = loadImage("assets/tiles/bone.png") // 6
  var grass_img = loadImage("assets/tiles/grass.png"); // 11
  var earth_tile_half_buttom_img = loadImage("assets/tiles/earth-tile-half-buttom.png"); // 8
  var earth_gem_img = loadImage("assets/tiles/earth_gem.png")// 10

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

    player: player_img,

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

    this.player = new Player(this, new Vector(50, 315), new Vector(20, 32),{tags:["player"], health: 100});
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

  checkCollisions(movableObject){
    let newPos = movableObject.position.add(movableObject.velocity);
    const newPosX = movableObject.position.add(new Vector(movableObject.velocity.x, 0));
    const newPosY = movableObject.position.add(new Vector(0, movableObject.velocity.y));
    const checkX = (movableObject.velocity.x !== 0);
    const positiveX = (movableObject.velocity.x > 0);
    const checkY = (movableObject.velocity.y !== 0);
    const positiveY = (movableObject.velocity.y > 0);
    const collisions = [];
    this.gameObjects.forEach((elem, i) => {
      // console.log(elem);
      if (!elem.isSolid || elem === movableObject) {
        return ;
      }
      //is elem inside movableObject's x
      if (
        valueBetween(newPos.x, elem.position.x, elem.position.x + elem.size.x) ||
        valueBetween(newPos.x + movableObject.size.x, elem.position.x, elem.position.x + elem.size.x) ||
        valueBetween(
          elem.position.x,
          newPos.x,
          newPos.x +
          movableObject.size.x) ||
        valueBetween(elem.position.x + movableObject.size.x, newPos.x, newPos.x + movableObject.size.x)
      ) {

        if (
          valueBetween(newPos.y, elem.position.y, elem.position.y + elem.size.y) ||
          valueBetween(newPos.y + movableObject.size.y, elem.position.y, elem.position.y + elem.size.y) ||
          valueBetween(elem.position.y, newPos.y, newPos.y + movableObject.size.y) ||
          valueBetween(elem.position.y + movableObject.size.y, newPos.y, newPos.y + movableObject.size.y)
        ) {
          //collision detected
          //which direction is the collision
          //is the blobk in the x direction
          const collisionObj = {};
          collisionObj.elem = elem;

          if (isRectangleOverlapping(newPosX, newPosX.add(movableObject.size), elem.position, elem.position.add(elem.size))) {
            //collision in x direction
            collisionObj.x = true;
          } else {
            collisionObj.x = false;
          }
          if (isRectangleOverlapping(newPosY, newPosY.add(movableObject.size), elem.position, elem.position.add(elem.size))) {
            //collision in y direction
            movableObject.isGrounded = true;
            collisionObj.y = true;
          } else {
            movableObject.isGrounded = false;
            collisionObj.y = false;
          }

          //if both of the above is false it means it will hit in both directions
          if (!collisionObj.x && !collisionObj.y) {

            // collisionObj.both = true;
            // collisionObj.x = true;
            // collisionObj.y = true;
          }

          // collisionObj.newPos = newPos;
          // collisionObj.newPosY = newPosY;
          // collisionObj.newPosX = newPosX;
          // collisionObj.movableObject = movableObject;



          collisions.push(collisionObj);
          if (movableObject.tags.indexOf("player") != -1) {
            // console.log(newPosX, newPosX.add(movableObject.size), elem.position, elem.position.add(elem.size)));
            // console.log(isRectangleOverlapping(newPosX, newPosX.add(movableObject.size), elem.position, elem.position.add(elem.size)));

          }

        }
      }
      //is elem inside movableObject's y

    });
    if (movableObject.tags.indexOf("player") != -1) {
      // console.log(collisions);
    }
    return collisions;
  }
}
