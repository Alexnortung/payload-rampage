let game;

function setup()
{
  const c = createCanvas(800, 640);
  c.parent("canvasContainer");
  background(52);
  game = new TowerDefenseGame(false);
}

function mousePressed() {
  game.mousePress();
}

function draw() {
  game.draw();
}

class TowerDefenseGame {
  constructor(debug){
    this.game = this;
    this.gold = 200;
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
    this.builder = new Builder(this);

    this.otherVals = {
      frameRate: frameRate()
    }

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


    this.tick++;
  }

  getGameObjectsAtExactPosition(position){
    const gameObjects = [];
    for (let i = 0; i < this.gameObjects.length; i++) {
      const cg = this.gameObjects[i];
      if (cg.position.x == position.x && cg.position.y == position.y) {
        gameObjects.push(cg);
      }
    }
    return gameObjects;

  }

  draw()
  {
    this.player.drawPlayer();
    if (this.debug) {
      if (this.tick % 60 == 0) {
        this.otherVals.frameRate = frameRate()

      }
      push();
      textAlign(LEFT, BOTTOM)
      text(this.otherVals.frameRate, 5, height-5 )

      pop();
    }
  }

  findGameObjectByTag(searchTag)
  {
    for (let i = 0; i < this.gameObjects.length; i++)
    {
      let elem = this.gameObjects[i];

      if(elem.hasTag(searchTag))
      {
        return elem;
      }
    }
  }

  findGameObjectsByTag(searchTag)
  {
    const gameObjects = [];
    for (let i = 0; i < this.gameObjects.length; i++)
    {
      let elem = this.gameObjects[i];
      if (elem.hasTag(searchTag)) {
        gameObjects.push(elem);

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
      //console.log(collisions);
    }
    return collisions;
  }

  spendGold(amount){
    this.gold-=amount;
  }

  mousePress(){
    this.builder.mousePress();
  }
}
