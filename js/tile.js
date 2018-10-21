class Tile extends GameObject
{
    constructor(game, position, size, options, images, imageId)
    {
        super(game, position, size, options);
        this.tags.push("tile");
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
            console.log(this.imageId);
            fill(0);
            rect(this.position.x, this.position.y, this.size.x, this.size.y);
        }
    }

    getImage()
    {
        switch (this.imageId)
        {
            case 1:
                return images.rib;

            case 2:
                return images.skeleton;

            case 3:
                return images.stone_1;

            case 4:
                return images.stone_2;

            case 5:
                return images.stone_3;

            case 6:
                return images.bg_stone_1;

            case 7:
                return images.bg_bone;

            case 8:
                return images.bg_gem;

            case 11:
                return images.bone;

            case 12:
                return images.dirt;

            case 13:
                return images.half_buttom;

            case 15:
                return images.gem;

            case 16:
                return images.bg_stone_2;

            case 17:
                return images.bg_earth;

            case 19:
                return images.stone_3;

            case 21:
                return images.grass;

            case 23:
                return images.ladder;

            case 31:
                return images.portal_top_left;

            case 32:
                return images.portal_top_right;

            case 33:
                return images.crystal_top_left;

            case 34:
                return images.crystal_top_right;

            case 41:
                return images.portal_bot_left;

            case 42:
                return images.portal_bot_right;

            case 43:
                return images.crystal_bot_left;

            case 44:
                return images.crystal_bot_right;

            default:
                return null;
                break;
        }
    }
}
