class Tile extends GameObject
{
    constructor(game, position, size, options, images, imageId)
    {
        super(game, position, size, options);
        if (typeof options === "object") {
          typeof options.isOneway === "boolean" ? this.isOneway = options.isOneway: this.isOneway = false;
        } else {
          this.isOneway = false;
        }
        this.imageId = imageId;
    }

    draw()
    {
        noStroke();
        fill(150);

        let img = this.getImage();

        if(img != null)
        {
            image(img, this.position.x, this.position.y, this.size.x, this.size.y);
        }
        else
        {
            rect(this.position.x, this.position.y, this.size.x, this.size.y);
        }
    }

    getImage()
    {
        switch (this.imageId)
        {
            case 3:
                return images.stone_1;
                break;

            case 4:
                return images.stone_2;
                break;

            case 5:
                return images.stone_3;

            case 6:
                return images.bone;

            case 7:
                return images.dirt;

            case 8:
                return images.half_buttom;

            case 10:
                return images.gem;

            case 11:
                return images.grass;

            case 16:
                return images.portal_top_left;
            
            case 17:
                return images.portal_top_right;

            case 18:
                return images.crystal_top_left;

            case 19:
                return images.crystal_top_right;

            case 21:
                return images.portal_bot_left;

            case 22:
                return images.portal_bot_right;

            case 23:
                return images.crystal_bot_left;

            case 24:
                return images.crystal_bot_right;

            default:
                return null;
                break;
        }
    }
}
