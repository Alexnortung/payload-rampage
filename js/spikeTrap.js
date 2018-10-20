class SpikeTrap extends Trap {
  constructor(game, position) {
    const options = {
      timeBetweenAttacks: SpikeTrap._timeBetweenAttacks,
      damage: SpikeTrap._damage,
      defaultCost: SpikeTrap._defaultCost
    }

    super(game, position, SpikeTrap._size, options);
    this.inRangeTriggers.push(new AttachedTrigger(game, this));

  }

  attack(){
    const enemies = this.getEnemiesInRange();
    enemies.forEach(enemy => {
      enemy.dealDamage(this.damage);
    });


    Trap.prototype.attack.call(this);
  }



  update(){
    if (this.getEnemiesInRange().length >= 1 && this.canAttack()) {
      this.attack();
    }

  }

  static get _size() {
    return new Vector(32,16);
  }
  static get _timeBetweenAttacks() {
    return 180;
  }
  static get _damage() {
    return 200;
  }
  static get _defaultCost() {
    return 180;
  }

}
