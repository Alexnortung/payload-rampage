class GameManager
{
  constructor(game)
  {
    this.game = game;
    this.round = 1;
    this.round_begun = false;
    this.amountToSpawn = this.round * 10;
    this.amountSpawned = 0;

    this.enemiess = [];

    this.portal = this.getPortalPosition();

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
      if(this.enemies.length)
      {
        this.interval;
        this.round_begun = false;
        this.round++;
        this.amountToSpawn = 20 * this.round;
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
      health: 1000,
      tags: ['enemy'],
      isFacingRight: true,
      defaultSpeed: 2,
      damage: 1,
    };

    new Enemy(this.game, new Vector(400,80), new Vector(32, 32), options);

    if(this.amountSpawned == this.amountToSpawn)
    {
      clearInterval(this.interval);
    }
  }
}
