class Tile extends GameObject
{
    constructor(game, position, size, options, images, imageId)
    {
        super(game, position, size, options);
        this.imageId = imageId;
    }

    draw()
    {
        noStroke();
        fill(150);

        image(images.dirt, this.position.x, this.position.y, this.size.x, this.size.y);

        //rect(this.position.x, this.position.y, this.size.x, this.size.y);
    }

    getImage()
    {
        switch (this.imageId)
        {
            case 1:
                return images.dirt;
                break;
        
            case 2:
                return images.stone;
                break;
            
            case 3:
                return images.grass;

            default:
                return null;
                break;
        }
    }
}