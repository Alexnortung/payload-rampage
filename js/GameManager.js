class GameManager
{
  constructor()
  {
    this.round = 1;
    this.round_begun = false;
    this.amountToSpawn = 10 * this.round;
    this.amountSpawned = 0;

    this.enemys = [];
  }

  checkRoundEnd()
  {
    if(this.round_begun)
    {
      if(this.enemys.length)
      {
        this.interval;
        this.round_begun = false;
        this.round++;
        this.amountToSpawn = 10 * this.round;
        this.amountSpawned = 0;
      }
    }
  }

  beginRound()
  {
    this.round_begun = true;

    this.interval = setInterval(()=>spawnEnemy(), 1000);
  }

  spawnEnemy()
  {
    this.amountSpawned++;

    if(this.amountSpawned == this.amountToSpawn)
    {
      clearInterval(this.interval);
    }
  }
}
