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

    this.player = new Player(this, new Vector(50, 50), new Vector(10, 10),{tags:["player"], health: 100});
    this.gravity = new Vector(0,0.2);

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

  checkCollisions(movableObject){
    let newPos = movableObject.position.add(movableObject.velocity);
    const newPosX = movableObject.position.add(movableObject.velocity.x, 0);
    const newPosY = movableObject.position.add(0, movableObject.velocity.y);
    const checkX = (movableObject.velocity.x !== 0);
    const positiveX = (movableObject.velocity.x > 0);
    const checkY = (movableObject.velocity.y !== 0);
    const positiveX = (movableObject.velocity.y > 0);
    const collisions = [];
    this.gameObjects.forEach((elem, i) => {
      //is elem inside movableObject's x
      if (valueBetween(newPos.x, elem.position.x, elem.position.x + elem.size.x) || valueBetween(newPos.x + movableObject.size.x, elem.position.x, elem.position.x + elem.size.x ||
      valueBetween(elem.x, newPos.position.x, newPos.position.x + newPos.size.x) || valueBetween(elem.x + movableObject.size.x, newPos.position.x, newPos.position.x + newPos.size.x) {
        if (valueBetween(newPos.y, elem.position.y, elem.position.y + elem.size.y) || valueBetween(newPos.y + movableObject.size.y, elem.position.y, elem.position.y + elem.size.y ||
        valueBetween(elem.y, newPos.position.y, newPos.position.y + newPos.size.y) || valueBetween(elem.y + movableObject.size.y, newPos.position.y, newPos.position.y + newPos.size.y) {
          //collision detected
          //which direction is the collision
          //is the blobk in the x direction
          const collisionObj = {};
          collision.elem = elem;

          if (isRectangleOverlapping(newPosX, newPosX.add(movableObject.size), elem.position, elem.position.add(elem.size))) {
            //collision in x direction
            collisionObj.x = true;
          } else {
            collisionObj.x = false;
          }
          if (isRectangleOverlapping(newPosY, newPosY.add(movableObject.size), elem.position, elem.position.add(elem.size))) {
            //collision in y direction
            collisionObj.y = true;
          } else {
            collisionObj.y = false;
          }

          //if both of the above is false it means it will hit in both directions
          if (!collisionObj.x && !collisionObj.y) {
            collisionObj.x = true;
            collisionObj.y = true;
          }



          collisions.push(collisionObj);

        }
      }
      //is elem inside movableObject's y

    });
    return collisions;
  }

}
