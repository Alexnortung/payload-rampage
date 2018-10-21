var images = {};
var animations = {};
var font;

function preload()
{

  font = loadFont('assets/fonts/pixelart.ttf');

  const player_img = loadImage("assets/sprites/Player1-v1.png");

  var stone_img_1 = loadImage("assets/tiles/foreground/stone_1.png"); // 3
  var stone_img_2 = loadImage("assets/tiles/foreground/stone_2.png"); // 4
  var stone_img_3 = loadImage("assets/tiles/foreground/stone_3.png"); // 5

  var earth_bone_img = loadImage("assets/tiles/foreground/bone.png") // 6
  var dirt_img = loadImage("assets/tiles/foreground/dirt.png"); // 7
  var earth_tile_half_buttom_img = loadImage("assets/tiles/foreground/earth-tile-half-buttom.png"); // 8

  var grass_img = loadImage("assets/tiles/foreground/grass.png"); // 11
  var earth_gem_img = loadImage("assets/tiles/foreground/earth_gem.png")// 10

  var rib_img = loadImage("assets/tiles/foreground/rib-tile.png");
  var skeleton_img = loadImage("assets/tiles/foreground/skeleton-tile.png");

  var crystal_top_left = loadImage("assets/objects/BaseGem/BaseGem_top_left.png"); // 18
  var crystal_top_right = loadImage("assets/objects/BaseGem/BaseGem_top_right.png"); // 19
  var crystal_bot_left = loadImage("assets/objects/BaseGem/BaseGem_bot_left.png"); // 23
  var crystal_bot_right = loadImage("assets/objects/BaseGem/BaseGem_bot_right.png"); // 24

  var portal_top_left = loadImage("assets/objects/Portal/Portal_top_left.png");
  var portal_top_right = loadImage("assets/objects/Portal/Portal_top_right.png");
  var portal_bot_left = loadImage("assets/objects/Portal/Portal_bot_left.png");
  var portal_bot_right = loadImage("assets/objects/Portal/Portal_bot_right.png");

  var bone_tile_bg = loadImage("assets/tiles/background/bone-tile-BG.png");
  var earth_tile_bg = loadImage("assets/tiles/background/earth-tile-BG.png");
  var gem_tile_bg = loadImage("assets/tiles/background/gem-tile-BG.png");
  var rib_tile_bg = loadImage("assets/tiles/background/rib-tile-BG.png");
  var skeleton_tile_bg = loadImage("assets/tiles/background/sleleton-tile-BG.png");
  var stone_tile_1_bg = loadImage("assets/tiles/background/stone-tile-1-BG.png");
  var stone_tile_2_bg = loadImage("assets/tiles/background/stone-tile-2-BG.png");
  var stone_tile_3_bg = loadImage("assets/tiles/background/stone-tile-3-BG.png");

  var ladder = loadImage("assets/objects/ladder/Ladder.png");

  var box_1_img = loadImage("assets/objects/boxes/boxes-1.png");
  var box_2_img = loadImage("assets/objects/boxes/boxes-2.png");
  var box_3_img = loadImage("assets/objects/boxes/boxes-3.png");
  var box_4_img = loadImage("assets/objects/boxes/boxes-4.png");
  var box_5_img = loadImage("assets/objects/boxes/boxes-5.png");

  var Arch_left_bund_img = loadImage("assets/objects/arcs/Arch-left-bund.png");
  var Arch_left_top_img = loadImage("assets/objects/arcs/Arch-left-top.png");
  var Arch_right_bund_img = loadImage("assets/objects/arcs/Arch-right-bund.png");
  var Arch_right_top_img = loadImage("assets/objects/arcs/Arch-right-top.png");
  var Arch_midterbjælke_img = loadImage("assets/objects/arcs/Arch-midterbjælke-top.png");
  var Arch_t_section_bund_img = loadImage("assets/objects/arcs/Arch-T-section-bund.png");
  var Arch_t_section_top_img = loadImage("assets/objects/arcs/Arch-T-section-top.png");

  var cart_stopper = loadImage("assets/objects/mine_carts/cart-stopper.png");
  var mine_empty = loadImage("assets/objects/mine_carts/mine-cart-empty.png");
  var mine_gold = loadImage("assets/objects/mine_carts/mine-cart-with-gold.png");
  var mine_rail = loadImage("assets/objects/mine_carts/railtracks.png");

  var misc_torch = loadImage("assets/objects/misc/torch-object.png");
  var misc_stones = loadImage("assets/objects/misc/stones.png");

  var enemy_1_lvl_1 = loadImage("assets/objects/enemies/Monster.png");

  var monsterWalk = loadAnimation("assets/objects/enemies/monster-movement/Monster_movement.png",
  "assets/objects/enemies/monster-movement/Monster_movement2.png",
  "assets/objects/enemies/monster-movement/Monster_movement3.png",
  "assets/objects/enemies/monster-movement/Monster_movement4.png",
  );
  var baseTrap = "assets/objects/traps/"
  var spike_closed = loadImage(baseTrap+"Spikes-Closed-v1.png");
  var spike_open = loadImage(`${baseTrap}Spikes-Open-v1.png`);



  images =
  {
    dirt: dirt_img,
    stone_1: stone_img_1,
    stone_2: stone_img_2,
    stone_3: stone_img_3,
    bone: earth_bone_img,
    grass: grass_img,

    rib: rib_img,
    skeleton: skeleton_img,

    player: player_img,

    half_buttom: earth_tile_half_buttom_img,
    gem: earth_gem_img,

    crystal_top_left: crystal_top_left,
    crystal_top_right: crystal_top_right,
    crystal_bot_left: crystal_bot_left,
    crystal_bot_right: crystal_bot_right,

    portal_top_left: portal_top_left,
    portal_top_right: portal_top_right,
    portal_bot_left: portal_bot_left,
    portal_bot_right: portal_bot_right,

    bg_stone_1: stone_tile_1_bg,
    bg_stone_2: stone_tile_2_bg,
    bg_stone_3: stone_tile_3_bg,

    bg_bone: bone_tile_bg,
    bg_earth: earth_tile_bg,
    bg_gem: gem_tile_bg,
    bg_rib: rib_tile_bg,
    bg_skeleton: skeleton_tile_bg,

    ladder: ladder,

    enemy_1_lvl_1: enemy_1_lvl_1,

    box_1: box_1_img,
    box_2: box_2_img,
    box_3: box_3_img,
    box_4: box_4_img,
    box_5: box_5_img,

    Arch_left_bund: Arch_left_bund_img,
    Arch_left_top: Arch_left_top_img,
    Arch_right_bund: Arch_right_bund_img,
    Arch_right_top: Arch_right_top_img,
    Arch_midterbjælke: Arch_midterbjælke_img,
    Arch_t_section_bund: Arch_t_section_bund_img,
    Arch_t_section_top: Arch_t_section_top_img,


    mine_cart_stopper: cart_stopper,
    mine_empty: mine_empty,
    mine_gold: mine_gold,
    mine_rail: mine_rail,

    misc_stones: misc_stones,
    misc_torch: misc_torch,

    spike_open: spike_open,
    spike_closed: spike_closed,

  };


  animations =
  {
    monsterWalk: monsterWalk,
  };
}
