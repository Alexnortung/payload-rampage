class Collider {
  constructor(gameObject, isTrigger){
    this.gameObject = gameObject;
    this.isTrigger = isTrigger;
    this.collidersInside = [];
  }

  onEnter(collider){
    this.gameObject.onEnter(collider);
  }

  onExit(collider){
    this.gameObject.onExit(collider);
  }

  whileInside(collider){
    this.gameObject.whileInside(collider);

  }



}
