class MapBuilding
{
    constructor(game, mapId,images)
    {
        this.mapId = mapId;
        this.game = game;
        this.mapData = this.getMap(this.mapId);
        console.log(this.mapData);
    }

    createMap()
    {
        for(let j = 0; j < this.mapData.layers.length; j++)
        {
            console.log("yass");
            for (let i = 0; i < this.mapData.layers[j].data.length; i++)
            {
                let id = this.mapData.layers[j].data[i];
                if(id != 0)
                {
                    if(j == 1)
                    {
                        var y = Math.floor( i / this.mapData.width);
                        var x = i % this.mapData.width;
    
                        if(id == 33)
                        {
                            let position = new Vector(x * this.mapData.tilewidth, y * this.mapData.tileheight);
                            let size = new Vector(this.mapData.tilewidth, this.mapData.tileheight);
        
                            let firstTile = new Tile(this.game, position, size, {}, images, id);
                            let core = new CoreCrystal(this.game, position, size, {tags: ['Core']}, firstTile);
                            //console.log(core);
                        }
                        else if(id == 33 || id == 43 || id == 44)
                        {
                            let tile = new Tile(this.game, new Vector(x * this.mapData.tilewidth, y * this.mapData.tileheight), new Vector(this.mapData.tilewidth, this.mapData.tileheight), {isSolid: false}, images, id);
                            let core = this.game.findGameObjectByTag('Core');
                            if (typeof core.add == 'function')
                            {
                                core.add(tile);
                            }
                        }
                        else if(id == 31)
                        {
                            let position = new Vector(x * this.mapData.tilewidth, y * this.mapData.tileheight);
                            let size = new Vector(this.mapData.tilewidth, this.mapData.tileheight);
        
                            let options = {isSolid: false};

                            let firstTile = new Tile(this.game, position, size, options, images, id);
                            let core = new Portal(this.game, position, new Vector(size.x * 2, size.y * 2), {isSolid: false,tags: ['Portal']}, firstTile);
                        }
                        else if(id == 32 || id == 33 || id == 34)
                        {
                            let options = {isSolid: false};
                            let tile = new Tile(this.game, new Vector(x * this.mapData.tilewidth, y * this.mapData.tileheight), new Vector(this.mapData.tilewidth, this.mapData.tileheight), options, images, id);
                            let core = this.game.findGameObjectByTag('Portal');
                            console.log(core);
                            if (core != null)
                            {
                                core.add(tile);
                            }
                        }
                        else if(id == 13)
                        {
                            new Tile(this.game, new Vector(x * this.mapData.tilewidth, y * this.mapData.tileheight), new Vector(this.mapData.tilewidth, (this.mapData.tileheight / 2)), {isSolid: true}, images, id);
                        }
                        else if(id == 23)
                        {
                            let options = {
                                isSolid: false,
                                tags: ['ladder'],
                            };
                            new Tile(this.game, new Vector(x * this.mapData.tilewidth, y * this.mapData.tileheight), new Vector(this.mapData.tilewidth, this.mapData.tileheight), options, images, id);
                        }
                        else
                        {
                            let options = {
                                isSolid: true,
                            };
                            new Tile(this.game, new Vector(x * this.mapData.tilewidth, y * this.mapData.tileheight), new Vector(this.mapData.tilewidth, this.mapData.tileheight), options, images, id);
                        }
                    }
                    else
                    {
                        var y = Math.floor( i / this.mapData.width);
                        var x = i % this.mapData.width;

                        let options = {
                            isSolid: false,
                        };
                        new Tile(this.game, new Vector(x * this.mapData.tilewidth, y * this.mapData.tileheight), new Vector(this.mapData.tilewidth, this.mapData.tileheight), options, images, id);
                    }
                }
            }
        }
    }

    getMap(mapid)
    {
        switch (mapid) {
            case 1:
                return{
                "height":20,
                "infinite":false,
                "layers":[
                       {
                        "data":[17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 7, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 6, 17, 17, 17, 17, 17, 17, 17, 17, 17, 6, 17, 17, 17, 8, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 6, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 8, 17, 17, 17, 17, 17, 17, 17, 17, 16, 17, 17, 17, 17, 17, 17, 17, 17, 6, 17, 17, 17, 6, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 6, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 6, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 6, 17, 17, 17, 17, 17, 17, 16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 7, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 6, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 6, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 8, 17, 17, 17, 17, 17, 17, 17, 17, 7, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
                        "height":20,
                        "id":3,
                        "name":"Tile Layer 2",
                        "opacity":1,
                        "type":"tilelayer",
                        "visible":true,
                        "width":20,
                        "x":0,
                        "y":0
                       }, 
                       {
                        "data":[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 23, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 23, 0, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 23, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 23, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 34, 0, 31, 32, 12, 12, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43, 44, 0, 41, 42, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
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
                "nextlayerid":4,
                "nextobjectid":1,
                "orientation":"orthogonal",
                "renderorder":"right-down",
                "tiledversion":"1.2.0",
                "tileheight":32,
                "tilesets":[
                       {
                        "firstgid":1,
                        "source":"Tiles map v1.tsx"
                       }],
                "tilewidth":32,
                "type":"map",
                "version":1.2,
                "width":20
               }
                break;


            default:
                break;
        }
    }
}