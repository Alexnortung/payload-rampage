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

  }

  update() {

  }

  draw() {

  }

  canAttack() {
    return his.game.tick - this.lastAttackTick >= this.timeBetweenAttacks;
  }


  attack(){


    this.lastAttackTick = this.game.tick;
  }


}
