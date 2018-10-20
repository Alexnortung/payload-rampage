class AttachedTrigger extends Trigger {
  constructor(game, attached, options) {
    super(game, attached.position, attached.size, options);
    this.attached = attached;
    if (attached.triggers !== "object") {
      attached.triggers = [];
    }
    attached.triggers.push(this);

  }

  update(){
    this.position = this.attached.position;
    this.size = this.attached.size;
    Trigger.prototype.update.call(this);
  }

  draw()
  {
    if(this.game.debug)
    {
      fill(255, 255, 255, 0);
      stroke(0, 255, 0);
      rect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
  }


}
