class Trigger extends GameObject {
  constructor(game, position,size, options) {
    super(game, position,size, options);
    if (options === "object") {
      typeof options.hasGravity === "boolean" ? this.hasGravity = options.hasGravity : this.hasGravity = false;
      typeof options.onEnter === "function" ? this.onEnter = options.onEnter : undefined;
      typeof options.whileInside === "function" ? this.whileInside = options.whileInside : undefined;
      typeof options.onLeave === "function" ? this.onLeave = options.onLeave : undefined;
    } else {
      this.hasGravity = false;
    }

    this.gameObjectsInside = [];



  }

  onEnter(gameObject){

  }

  whileInside(gameObject){

  }

  onLeave(gameObject){

  }


  update(){


    const overlaps = this.game.findOverlaps(this);
    // console.log(overlaps);

    for (let i = overlaps.length-1; i >= 0; i--) {
      const overlappingObject = overlaps[i];
      const index = this.gameObjectsInside.indexOf(overlappingObject);
      // console.log(index, overlappingObject);
      if (index == -1) {
        //call onEnter for this object
        this.onEnter(overlappingObject);
        // console.log("hello");
        this.gameObjectsInside.push(overlappingObject);
      } else {
        // call while inside
        this.whileInside(overlappingObject);
      }
    }

    for (let i = this.gameObjectsInside.length -1; i >= 0; i--) {
      const gameObject = this.gameObjectsInside[i]
        const index = overlaps.indexOf(gameObject);
        if (index == -1) {
          //call onLeave for this object
          this.onLeave(gameObject);
          // console.log("goodbyw");
          this.gameObjectsInside.splice(i,1)

        }
    }

    // overlaps.forEach(overlappingObject => {
    //   const index = this.gameObjectsInside.indexOf(overlappingObject);
    //   if (index == -1) {
    //     //call onEnter for this object
    //     this.onEnter(overlappingObject);
    //   } else {
    //     // call while inside
    //     this.whileInside(overlappingObject);
    //   }
    // });

    // this.gameObjectsInside.forEach((gameObject) => {
    //   const index = this.overlaps.indexOf(gameObject);
    //   if (index == -1) {
    //     //call onLeave for this object
    //     this.onLeave(gameObject);
    //
    //   }
    // })

  }
}
