class Trap extends GameObject {
  constructor(game, position, size, options) {
    super(game, position, size, options);
    this.lastAttackTick = -Infinity;
    if (typeof options === "object") {
      typeof options.timeBetweenAttacks === "number" ? this.timeBetweenAttacks = options.timeBetweenAttacks : this.timeBetweenAttacks = 30;
      typeof options.damage === "number" ? this.damage = options.damage : this.damage = 5;
      typeof options.defaultCost === "number" ? this.defaultCost = options.defaultCost : this.defaultCost = 100;
    } else {
      this.timeBetweenAttacks = 30;
      this.damage = 5;
      this.defaultCost = 100;
    }

    this.inRangeTriggers = []

  }

  update() {

  }

  draw() {

  }

  getEnemiesInRange() {
    const enemies = [];
    for (var i = 0; i < this.inRangeTriggers.length; i++) {
      const rangeTrigger = this.inRangeTriggers[i];
      for (var i = 0; i < rangeTrigger.gameObjectsInside.length; i++) {
        const enemy = rangeTrigger.gameObjectsInside[i];
        if (rangeTrigger.gameObjectsInside[i].hasTag("enemy") && enemies.indexOf(enemy) != -1) {
          enemies.push(enemy);
        }

      }
    }
    return enemies;
  }

  canAttack() {
    return his.game.tick - this.lastAttackTick >= this.timeBetweenAttacks;
  }


  attack(){


    this.lastAttackTick = this.game.tick;
  }


}
