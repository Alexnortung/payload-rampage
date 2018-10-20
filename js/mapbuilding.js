class MapBuilding
{
    constructor(game, mapId,images)
    {
        this.mapId = mapId;
        this.game = game;
        this.mapData = this.getMap(this.mapId);
    }

    createMap()
    {
        for (let i = 0; i < (this.mapData.width * this.mapData.height); i++)
        {
            let id = this.mapData.layers[0].data[i];
            if(id != 0)
            {
                var y = Math.floor( i / this.mapData.width);
                var x = i % this.mapData.width;
                if(id == 18)
                {
                    let position = new Vector(x * this.mapData.tilewidth, y * this.mapData.tileheight);
                    let size = new Vector(this.mapData.tilewidth, this.mapData.tileheight);

                    let firstTile = new Tile(this.game, position, size, {}, images, id);
                    let core = new CoreCrystal(this.game, position, size, {tags: ['Core']}, firstTile);
                    //console.log(core);
                }
                if(id == 19 || id == 23 || id == 24)
                {
                    let tile = new Tile(this.game, new Vector(x * this.mapData.tilewidth, y * this.mapData.tileheight), new Vector(this.mapData.tilewidth, this.mapData.tileheight), {isSolid: false}, images, id);
                    let core = this.game.findGameObjectByTag('Core');
                    if (typeof core.add == 'function')
                    {
                        core.add(tile);
                    }
                }
                else
                {
                    new Tile(this.game, new Vector(x * this.mapData.tilewidth, y * this.mapData.tileheight), new Vector(this.mapData.tilewidth, this.mapData.tileheight), {isSolid: true}, images, id);
                }
            }
        }
    }

    getMap(mapid)
    {
        switch (mapid) {
            case 1:
                return {
                    "height":20,
                    "infinite":false,
                    "layers":[
                        {
                            "data":[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                            "height":20,
                            "id":1,
                            "name":"Tile Layer 1",
                            "opacity":1,
                            "type":"tilelayer",
                            "visible":true,
                            "width":20,
                            "x":0,
                            "y":0
                        }],
                    "nextlayerid":2,
                    "nextobjectid":1,
                    "orientation":"orthogonal",
                    "renderorder":"right-down",
                    "tiledversion":"1.2.0",
                    "tileheight":32,
                    "tilewidth":32,
                    "type":"map",
                    "version":1.2,
                    "width":20
                };
                break;
            case 2:
                return {
                    "height":20,
                    "infinite":false,
                    "layers":[
                        {
                            "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 22, 0, 11, 0, 0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 7, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 5, 7, 7, 7, 5, 7, 7, 7, 7, 7, 0, 0, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 7, 7, 7, 7, 7, 3, 7, 7, 7, 3, 7, 7, 7, 7, 3, 7, 7, 7, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 0, 0, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 7, 7, 7, 7, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 7, 7, 0, 0, 7, 7, 5, 10, 7, 7, 7, 7, 7, 7, 7, 7, 4, 0, 0, 0, 7, 7, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 18, 19, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 24, 7, 7, 7, 7, 7, 7, 7, 7, 7, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                            "height":20,
                            "id":1,
                            "name":"Tile Layer 1",
                            "opacity":1,
                            "type":"tilelayer",
                            "visible":true,
                            "width":20,
                            "x":0,
                            "y":0
                        }],
                    "nextlayerid":3,
                    "nextobjectid":1,
                    "orientation":"orthogonal",
                    "renderorder":"right-down",
                    "tiledversion":"1.2.0",
                    "tileheight":32,
                    "tilesets":[
                        {
                            "firstgid":1,
                            "source":"Tildemap test.tsx"
                        }],
                    "tilewidth":32,
                    "type":"map",
                    "version":1.2,
                    "width":20
                    };
                    break;


            default:
                break;
        }
    }
}