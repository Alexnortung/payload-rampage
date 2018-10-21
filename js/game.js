let game;
var images = {};
var animation = {};

function preload()
{

  const player_img = loadImage("assets/sprites/Player1-v1.png");

  var stone_img_1 = loadImage("assets/tiles/foreground/stone_1.png"); // 3
  var stone_img_2 = loadImage("assets/tiles/foreground/stone_2.png"); // 4
  var stone_img_3 = loadImage("assets/tiles/foreground/stone_3.png"); // 5

  var earth_bone_img = loadImage("assets/tiles/foreground/bone.png") // 6
  var dirt_img = loadImage("assets/tiles/foreground/dirt.png"); // 7
  var earth_tile_half_buttom_img = loadImage("assets/tiles/foreground/earth-tile-half-buttom.png"); // 8

  var grass_img = loadImage("assets/tiles/foreground/grass.png"); // 11
  var earth_gem_img = loadImage("assets/tiles/foreground/earth_gem.png")// 10

  var rib_img = loadImage("assets/tiles/foreground/rib-tile.png");
  var skeleton_img = loadImage("assets/tiles/foreground/skeleton-tile.png");

  var crystal_top_left = loadImage("assets/objects/BaseGem/BaseGem_top_left.png"); // 18
  var crystal_top_right = loadImage("assets/objects/BaseGem/BaseGem_top_right.png"); // 19
  var crystal_bot_left = loadImage("assets/objects/BaseGem/BaseGem_bot_left.png"); // 23
  var crystal_bot_right = loadImage("assets/objects/BaseGem/BaseGem_bot_right.png"); // 24

  var portal_top_left = loadImage("assets/objects/Portal/Portal_top_left.png");
  var portal_top_right = loadImage("assets/objects/Portal/Portal_top_right.png");
  var portal_bot_left = loadImage("assets/objects/Portal/Portal_bot_left.png");
  var portal_bot_right = loadImage("assets/objects/Portal/Portal_bot_right.png");

  var bone_tile_bg = loadImage("assets/tiles/background/bone-tile-BG.png");
  var earth_tile_bg = loadImage("assets/tiles/background/earth-tile-BG.png");
  var gem_tile_bg = loadImage("assets/tiles/background/gem-tile-BG.png");
  var rib_tile_bg = loadImage("assets/tiles/background/rib-tile-BG.png");
  var skeleton_tile_bg = loadImage("assets/tiles/background/sleleton-tile-BG.png");
  var stone_tile_1_bg = loadImage("assets/tiles/background/stone-tile-1-BG.png");
  var stone_tile_2_bg = loadImage("assets/tiles/background/stone-tile-2-BG.png");
  var stone_tile_3_bg = loadImage("assets/tiles/background/stone-tile-3-BG.png");

  var ladder = loadImage("assets/objects/ladder/Ladder.png");

  var enemy_1_lvl_1 = loadImage("assets/objects/enemies/Monster.png");

  //var monsterWalk = loadAnimation("assets/objects/enemies/monster-movement/Monster_movement.png");
  /*"assets/objects/enemies/monster-movement/Monster_movement2.png",
  "assets/objects/enemies/monster-movement/Monster_movement3.png",
  "assets/objects/enemies/monster-movement/Monster_movement4.png",
  );*/

  images =
  {
    dirt: dirt_img,
    stone_1: stone_img_1,
    stone_2: stone_img_2,
    stone_3: stone_img_3,
    bone: earth_bone_img,
    grass: grass_img,

    rib: rib_img,
    skeleton: skeleton_img,

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

    bg_stone_1: stone_tile_1_bg,
    bg_stone_2: stone_tile_2_bg,
    bg_stone_3: stone_tile_3_bg,

    bg_bone: bone_tile_bg,
    bg_earth: earth_tile_bg,
    bg_gem: gem_tile_bg,
    bg_rib: rib_tile_bg,
    bg_skeleton: skeleton_tile_bg,

    ladder: ladder,

    enemy_1_lvl_1: enemy_1_lvl_1,
  };


/*  animation =
  {
    monsterWalk: monsterWalk,
  };*/
}


function setup()
{
  createCanvas(640, 640);
  background(52);
  game = new TowerDefenseGame(true);
}

class TowerDefenseGame {
  constructor(debug){
    this.gold = 100;
    this.gameObjects = [];
    this._newId = 0;

    this.tick = 0;
    this.gameOver = false;

    if (typeof debug != 'undefined')
    {
      this.debug = debug;
    }
    else
    {
      this.debug = false;
    }

    this.mapbuilder = new MapBuilding(this, 1, images);

    this.player = new Player(this, new Vector(50, 315), new Vector(20, 32),{tags:["player"], health: 100});
    this.gravity = new Vector(0,0.2);

    this.mapbuilder.createMap();

    new Life(this, new Vector(15, 15), new Vector(0, 0), {});
    new Gold(this, new Vector(15, 30), new Vector(0, 0), {});

    this.gm = new GameManager(this);

    setInterval(()=>this.update(), 16);
  }

  getNewId() {
    this._newId++;
    return this._newId;
  }

  update()
  {
    background(255);
    for (let i = 0; i < this.gameObjects.length; i++)
    {
      this.gameObjects[i].update();

      if(typeof this.gameObjects[i] !== "undefined" && typeof this.gameObjects[i].draw == 'function')
      {
        this.gameObjects[i].draw();
      }
    }

    if(this.debug)
    {
      for (let i = 0; i < this.gameObjects.length; i++)
      {
        this.gameObjects[i].debug();
      }
    }

    this.draw();
    this.tick++;
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

    return null;
  }

  findGameObjectsByTag(searchTag)
  {
    const gameObjects = [];
    for (let i = 0; i < this.gameObjects.length; i++)
    {
      let elem = this.gameObjects[i];
      for (let j = 0; j < elem.tags.length; j++)
      {
        let tag = elem.tags[j];

        if(tag == searchTag)
        {
          gameObjects.push(elem);
        }

      }

    }
    return gameObjects;
  }

  destroyGameObject(id){
    for (var i = 0; i < this.gameObjects.length; i++) {
      if (this.gameObjects[i].gameObjectId === id) {
        this.gameObjects.splice(i,1);
        return true;
      }
    }
    return false;
  }

  findOverlaps(gameObject){
    const overlaps = [];
    this.gameObjects.forEach((otherGameObject) => {
      if (otherGameObject === gameObject) {
        return;
      }
      if (gameObject.overlaps(otherGameObject)) {
        overlaps.push(otherGameObject);
      }


    });
    return overlaps;
  }

  checkLadder(movableObject){
    const allLadders = this.findGameObjectsByTag("ladder");
    const overlappingLadders = [];
    allLadders.forEach((ladder, i) => {
      if (movableObject.overlaps(ladder)) {
        overlappingLadders.push(ladder);
      }

    });
    return overlappingLadders;
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
      if ((!elem.isSolid && !elem.isOneway) || elem === movableObject) {
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

          if (isRectangleOverlapping(!elem.isOneway && newPosX, newPosX.add(movableObject.size), elem.position, elem.position.add(elem.size))) {
            //collision in x direction
            collisionObj.x = true;
          } else {
            collisionObj.x = false;
          }
          if (isRectangleOverlapping(newPosY, newPosY.add(movableObject.size), elem.position, elem.position.add(elem.size))) {
            //collision in y direction
            //movableObject is above the elem
            if (!elem.isOneway || (elem.isOneway && !positiveY && (movableObject.position.y + movableObject.size.y > elem.position.y))) {
              // console.log("isgrounded");
              movableObject.isGrounded = true;
              collisionObj.y = true;

            }else if (elem.isOneway && positiveY) {
              collisionObj.y = false;
              movableObject.isGrounded = false;
            }
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
