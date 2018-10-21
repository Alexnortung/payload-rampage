class Trap extends GameObject {
  constructor(game, position, size, options) {
    super(game, position, size, options);
    this.lastAttackTick = -Infinity;
    if (typeof options === "object") {
      typeof options.timeBetweenAttacks === "number" ? this.timeBetweenAttacks = options.timeBetweenAttacks : this.timeBetweenAttacks = 30;
      typeof options.damage === "number" ? this.damage = options.damage : this.damage = 5;
      typeof options.defaultCost === "number" ? this.defaultCost = options.defaultCost : this.defaultCost = 100;
      typeof options.trapType === "string" ? this.trapType = options.trapType : this.trapType = Trap._floorTrap;
    } else {
      this.timeBetweenAttacks = 30;
      this.damage = 5;
      this.defaultCost = 100;
      this.trapType = Trap._floorTrap;
    }

    this.inRangeTriggers = []

  }

  update() {

  }

  draw() {
    if (this.game.debug) {

    }
  }

  getEnemiesInRange() {
    const enemies = [];
    for (let i = 0; i < this.inRangeTriggers.length; i++) {
      const rangeTrigger = this.inRangeTriggers[i];
      for (let j = 0; j < rangeTrigger.gameObjectsInside.length; j++) {
        const enemy = rangeTrigger.gameObjectsInside[j];
        if (rangeTrigger.gameObjectsInside[j].hasTag("enemy") && enemies.indexOf(enemy) == -1) {
          enemies.push(enemy);
        }

      }
    }
    return enemies;
  }

  canAttack() {
    return this.game.tick - this.lastAttackTick >= this.timeBetweenAttacks;
  }


  attack(){


    this.lastAttackTick = this.game.tick;
  }

  static get _floorTrap(){
    return 0;
  }
  static get _wallTrap(){
    return 1;
  }
  static get _roofTrap(){
    return 2;
  }

  static get _size() {
    return new Vector(32,32);
  }


}
