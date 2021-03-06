class MapBuilding
{
    constructor(game, mapId,images)
    {
        this.mapId = mapId;
        this.game = game;
        this.mapData = this.getMap(this.mapId);
        //console.log(this.mapData);
    }

    createMap()
    {
        for(let j = 0; j < this.mapData.layers.length; j++)
        {
            for (let i = 0; i < this.mapData.layers[j].data.length; i++)
            {
                let id = this.mapData.layers[j].data[i];
                if(id != 0)
                {
                    if(j == 3)
                    {
                        var y = Math.floor( i / this.mapData.width);
                        var x = i % this.mapData.width;
    
                        
                        if(id == 13)
                        {
                            new Tile(this.game, new Vector(x * this.mapData.tilewidth, y * this.mapData.tileheight), new Vector(this.mapData.tilewidth, (this.mapData.tileheight / 2)), {isSolid: true}, images, id);
                        }
                        else if(id == 14)
                        {
                            new Tile(this.game, new Vector(x * this.mapData.tilewidth, (y * this.mapData.tileheight) + (this.mapData.tileheight/2)), new Vector(this.mapData.tilewidth, (this.mapData.tileheight / 2)), {isSolid: true}, images, id)
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

                        if(id == 33)
                        {
                            let position = new Vector(x * this.mapData.tilewidth, y * this.mapData.tileheight);
                            let size = new Vector(this.mapData.tilewidth, this.mapData.tileheight);
        
                            let firstTile = new Tile(this.game, position, size, {isSolid: false,}, images, id);
                            let core = new CoreCrystal(this.game, position, new Vector(size.x * 2, size.y * 2), {isSolid:false,tags: ['Core']}, firstTile);
                        }
                        else if(id == 34 || id == 43 || id == 44)
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
                            let core = new Portal(this.game, position, new Vector(size.x * size.x, size.y * size.y), {isSolid: false,tags: ['Portal']}, firstTile);
                        }
                        else if(id == 32 || id == 41 || id == 42)
                        {
                            let options = {isSolid: false};
                            let tile = new Tile(this.game, new Vector(x * this.mapData.tilewidth, y * this.mapData.tileheight), new Vector(this.mapData.tilewidth, this.mapData.tileheight), options, images, id);
                            let core = this.game.findGameObjectByTag('Portal');
                            if (core != null)
                            {
                                core.add(tile);
                            }
                        }
                        else
                        {
                            let options = {
                                isSolid: false,
                            };
                            new Tile(this.game, new Vector(x * this.mapData.tilewidth, y * this.mapData.tileheight), new Vector(this.mapData.tilewidth, this.mapData.tileheight), options, images, id);
                        }
                    }
                }
            }
        }
    }

    getMap(mapid)
    {
        switch (mapid) {
            case 1:
                return{ "height":20,
                "infinite":false,
                "layers":[
                       {
                        "data":[17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 0, 0, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 17, 17, 17, 17, 17, 19, 17, 17, 9, 17, 17, 8, 17, 17, 17, 0, 0, 0, 0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 7, 17, 17, 0, 0, 17, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 17, 17, 17, 6, 0, 0, 17, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 17, 0, 0, 17, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 17, 17, 17, 9, 0, 0, 17, 0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 0, 0, 17, 17, 17, 17, 17, 9, 17, 17, 17, 17, 17, 8, 17, 17, 0, 0, 0, 0, 0, 0, 17, 16, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 0, 0, 0, 0, 17, 17, 0, 0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 17, 17, 0, 0, 0, 17, 17, 17, 17, 17, 17, 17, 17, 18, 17, 17, 17, 17, 17, 17, 17, 19, 0, 0, 0, 17, 17, 8, 17, 7, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 0, 0, 0, 17, 17, 17, 17, 0, 0, 0, 0, 0, 0, 0, 17, 17, 17, 17, 17, 17, 6, 0, 0, 17, 17, 17, 6, 17, 17, 17, 17, 17, 19, 17, 17, 17, 17, 17, 17, 17, 17, 0, 0, 12, 12, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        "height":20,
                        "id":5,
                        "name":"Background_layer",
                        "opacity":1,
                        "type":"tilelayer",
                        "visible":true,
                        "width":20,
                        "x":0,
                        "y":0
                       }, 
                       {
                        "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 32, 0, 0, 55, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 25, 0, 55, 0, 0, 41, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 56, 0, 27, 0, 0, 46, 0, 0, 56, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 37, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 0, 0, 56, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56, 0, 0, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 37, 38, 37, 37, 38, 37, 37, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 46, 0, 48, 56, 55, 48, 56, 0, 45, 26, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56, 24, 28, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 37, 38, 37, 37, 38, 37, 38, 0, 0, 0, 0, 51, 53, 52, 53, 53, 54, 25, 0, 46, 0, 48, 0, 0, 48, 0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        "height":20,
                        "id":3,
                        "name":"Object_layer_back",
                        "opacity":1,
                        "type":"tilelayer",
                        "visible":true,
                        "width":20,
                        "x":0,
                        "y":0
                       }, 
                       {
                        "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 0, 26, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 0, 0, 0, 27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 53, 53, 53, 0, 51, 54, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 53, 53, 53, 53, 53, 53, 53, 53, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 0, 24, 43, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        "height":20,
                        "id":4,
                        "name":"Object_layer_front",
                        "opacity":1,
                        "type":"tilelayer",
                        "visible":true,
                        "width":20,
                        "x":0,
                        "y":0
                       }, 
                       {
                        "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 5, 23, 0, 0, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 12, 3, 12, 12, 23, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 12, 23, 12, 12, 12, 12, 12, 12, 12, 12, 5, 12, 12, 12, 14, 14, 0, 0, 0, 12, 3, 23, 12, 12, 5, 12, 15, 12, 12, 11, 12, 4, 12, 3, 12, 12, 12, 0, 0, 12, 12, 23, 12, 12, 12, 3, 12, 12, 4, 12, 12, 12, 5, 12, 13, 13, 13, 0, 0, 12, 12, 23, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 0, 0, 0, 0, 0, 0, 4, 12, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 12, 12, 12, 12, 12, 11, 23, 0, 0, 0, 12, 12, 5, 12, 12, 3, 12, 12, 12, 12, 12, 5, 12, 1, 12, 12, 23, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 12, 12, 4, 15, 12, 23, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 12, 5, 3, 12, 23, 12, 12, 12, 12, 3, 12, 12, 12, 12, 5, 12, 4, 12, 0, 23, 0, 12, 12, 12, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 13, 13, 13, 13, 23, 0, 12, 2, 12, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 12, 12, 12, 23, 0, 0, 0, 12, 12, 12, 15, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 12, 12, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 5, 12, 12, 12, 3, 12, 12, 12, 12, 11, 12, 12, 12, 4, 12, 12, 12, 12, 12],
                        "height":20,
                        "id":1,
                        "name":"Collision_layer",
                        "opacity":1,
                        "type":"tilelayer",
                        "visible":true,
                        "width":20,
                        "x":0,
                        "y":0
                       }, 
                       {
                        "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        "height":20,
                        "id":2,
                        "name":"Foreground",
                        "opacity":1,
                        "type":"tilelayer",
                        "visible":true,
                        "width":20,
                        "x":0,
                        "y":0
                       }],
                "nextlayerid":6,
                "nextobjectid":1,
                "orientation":"orthogonal",
                "renderorder":"right-down",
                "tiledversion":"1.2.0",
                "tileheight":32,
                "tilesets":[
                       {
                        "firstgid":1,
                        "source":"Tiles map v2.tsx"
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