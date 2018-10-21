class SpikeTrap extends Trap {
  constructor(game, position) {
    const options = {
      timeBetweenAttacks: SpikeTrap._timeBetweenAttacks,
      damage: SpikeTrap._damage,
      defaultCost: SpikeTrap._defaultCost,
      trapType: Trap._floorTrap,
      tags: ["trap", "spikeTrap"]
    }

    super(game, position, SpikeTrap._size, options);
    let rangeTrigger = new AttachedTrigger(game, this);
    rangeTrigger.onEnter((gameObject) => {
      console.log(gameObject);
    });
    rangeTrigger.onLeave((gameObject) => {
      console.log(gameObject);
    });
    this.inRangeTriggers.push(rangeTrigger);

  }

  attack(){
    // console.log("attacking!");
    const enemies = this.getEnemiesInRange();
    enemies.forEach(enemy => {
      enemy.dealDamage(this.damage);
    });


    Trap.prototype.attack.call(this);
  }



  update(){
    // console.log(this.getEnemiesInRange());
    if (this.getEnemiesInRange().length >= 1 && this.canAttack()) {
      this.attack();
    }

  }

  static get _size() {
    return new Vector(32,16);
  }

  static get _trapType() {
    return Trap._floorTrap;
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
