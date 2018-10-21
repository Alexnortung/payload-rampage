class GameManager
{
  constructor(game)
  {
    this.game = game;
    this.round = 1;
    this.round_begun = false;
    this.amountToSpawn = 1;//this.round * 10;
    this.amountSpawned = 0;

    this.enemiess = [];

    this.portal = this.getPortalPosition();
    console.log(this.portal);

    this.interval;

    window.addEventListener('keydown',(e)=>this.beginRound(e),false);
  }

  getPortalPosition()
  {
    return this.game.findGameObjectByTag('Portal');
  }

  checkRoundEnd()
  {
    if(this.round_begun)
    {
      if(this.amountSpawned == this.amountToSpawn)
      {
        clearInterval(this.interval);
        this.round_begun = false;
        this.round++;
        this.amountToSpawn = 1;//10 * this.round;
        this.amountSpawned = 0;
      }
    }
  }

  beginRound(e)
  {
    if(e.keyCode == 71 && !this.round_begun)
    {
      this.round_begun = true;

      this.interval = setInterval(()=>this.spawnEnemy(), 1000);
    }
  }

  spawnEnemy()
  {
    this.amountSpawned++;

    let options = {
      enemyId: 1,
      isSolid: true,
      health: this.round  * 100,
      tags: ['enemy'],
      isFacingRight: false,
      defaultSpeed: 2,
      damage: 1,
    };

    console.log("enemy Spawned");

    new Enemy(this.game, new Vector(18*32, 32), new Vector(32, 32), options);

    this.checkRoundEnd();
  }
}
