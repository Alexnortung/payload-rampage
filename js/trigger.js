class Trigger extends GameObject {
  constructor(game, position,size, options) {
    super(game, position,size, options);
    if (options === "object") {
      typeof hasGravity === "boolean" ? this.hasGravity = options.hasGravity : this.hasGravity = false;

    } else {
      this.hasGravity = false;
    }



  }

  onEnter(gameObject){

  }

  whileInside(gameObject){

  }

  onLeave(gameObject){

  }


  update(){


    const overlaps = this.game.findOverlaps(this);

    overlaps.forEach(overlappingObjet => {
      const index = this.gameObjectsInside.indexOf(overlappingObjet);
      if (index == -1) {
        //call onEnter for this object
        this.onEnter(overlappingObjet);
      } else {
        // call while inside
        this.whileInside(overlappingObjet);
      }
    });

    this.gameObjectsInside.forEach((gameObject) => {
      const index = this.overlaps.indexOf(gameObject);
      if (index == -1) {
        //call onLeave for this object
        this.onLeave(gameObject);

      }
    })

  }
}
