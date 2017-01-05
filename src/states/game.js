function Game() {}

Game.prototype.create = function() {
    background = this.add.image(0, 0, "background");
    background.width = 800;
    background.height = 600;
    player1 = this.add.group();
    player2 = this.add.group();
    xpos = this.world.centerX;
    ypos = this.world.centerY;
    this.input.onDown.add(this.onInputDown, this);
    if (this.createP1() == 0)
    {
      player1Alive = true;
      p1attack = 6;
      p1init = 10;
      p1avoid = 50;
      p1armor = 3;
      p1life = 100;
      p1block = 10;
    }
    if (this.createP2() == 0)
    {
      p1init = 20;
      player2Alive = true;
      p2attack = 10;
      p2avoid = 20;
      p2armor = 4;
      p2life = 100;
      p2block = 10;
    }
    p1hp = this.add.bitmapText(10, 30, 'carrier_command', 'HP: '  + p1life, 34);
    p2hp = this.add.bitmapText(500, 30, 'carrier_command', 'HP: ' + p2life, 34);
    this.CheckPlayersInit();
    gameTurn = 0;

    player1.setAll('anchor:x', 0.5);
    player1.setAll('anchor:y', 0.5);
    player2.setAll('anchor:x', 0.5);
    player2.setAll('anchor:y', 0.5);
    this.animattack(player2, player1);
};

Game.prototype.update = function() {
  if((this.player1Alive == true) && (this.player2Alive == true))
  {
    if(this.gameTurn == 0)
    {
      this.Player1Turn();
      this.gameTurn = 1;
    }
    else if(this.gameTurn == 1)
    {
      this.Player2Turn();
      this.gameTurn = 0;
    }
    CheckPlayersAreAlive();
  }
};

Game.prototype.Player1Turn = function() {
  //CheckWeapon();
  Attack(this.p2life, this.p2armor, this.p2avoid, this.p1attack);
};


Game.prototype.Player2Turn = function() {
  //CheckWeapon();
  Attack(this.p1life,this. p1armor, this.p1avoid, this.p2attack);
};

Game.prototype.CheckPlayersAreAlive = function() {
  if(this.p1life <= 0)
  {
    this.player1Alive = false;
  }
  else   if(this.p2life <= 0) {
    this.player2Alive = false;
  }
};


Game.prototype.Attack = function(life, armor, avoid, attack) {

  if(life > 0)
  {
    damage = attack - armor;
    var rand1 = this.rnd.integerInRange(0, 100);
    if (avoid < rand1)
    {
      life = life - damage;
    }
    else {
      {
        console.log('avoid');
      }
    }
  }
      this.createP1();
    this.createP2();
};

/*Game.prototype.CheckWeapon = function() {

};*/

Game.prototype.CheckPlayersInit = function() {
  if(this.p1init > this.p2init)
  {
    this.gameTurn = 0;
  }
  else if (this.p1init  < this.p2init)
  {
    this.gameTurn = 1;
  }
  else if (this.p1init  ==  this.p2init)
  {
    var rand1 = this.rnd.integerInRange(0, 100);
    var rand2 = this.rnd.integerInRange(0, 100);
    if(rand1 < rand2)
    {
      this.gameTurn = 0;
    }
    else
    {
      this.gameTurn = 1;
    }
  }
};


Game.prototype.onInputDown = function() {

};

Game.prototype.createP1 = function() {
    this.x = 20;
    this.y = 600 - 150;
    this.char = this.add.sprite(this.x, this.y, 'spritesheet');
    this.weapon = this.add.sprite(this.x, this.y, 'spritesheet');
    this.pants = this.add.sprite(this.x, this.y, 'spritesheet');
    this.hair = this.add.sprite(this.x, this.y, 'spritesheet');
    this.char.frame = 1;
    this.char.scale.setTo(6);
    this.weapon.frame = 368;
    this.weapon.scale.setTo(6);
    this.pants.frame = 3;
    this.pants.scale.setTo(6);
    this.hair.frame = 19;
    this.hair.scale.setTo(6);

    player1.add(this.char);
    player1.add(this.pants);
    player1.add(this.hair);
    player1.add(this.weapon);
    return 0;
};

Game.prototype.createP2 = function() {
    this.x = 800 - 20;
    this.y = 600 - 150;
    this.char = this.add.sprite(this.x, this.y, 'spritesheet');
    this.weapon = this.add.sprite(this.x, this.y, 'spritesheet');
    this.pants = this.add.sprite(this.x, this.y, 'spritesheet');
    this.hair = this.add.sprite(this.x, this.y, 'spritesheet');
    this.char.frame = 1;
    this.char.scale.setTo(-6, 6);
    this.weapon.frame = 51;
    this.weapon.scale.setTo(-6, 6);
    this.pants.frame = 57;
    this.pants.scale.setTo(-6, 6);
    this.hair.frame = 22;
    this.hair.scale.setTo(-6, 6);

    player2.add(this.char);
    player2.add(this.pants);
    player2.add(this.hair);
    player2.add(this.weapon);
    return 0;
};

Game.prototype.animattack = function(from, to) {
  if (from.children[1].x < to.children[1].x) {
    side = -1;
  } else {
    side = 1;
  }
  initialPos = from.children[1].x;
  console.log(to.children[1]);
  tween1 =  this.add.tween(from).to( { x: to.children[1].x }, 300  , Phaser.Easing.Linear.None);
  tween2 = this.add.tween(from.children[3]).to({x: from.children[3].world.x + 5, y: from.children[3].world.y + 5, angle: 10}, 200, Phaser.Easing.Linear.None, false, 0, 0, true);
  tween3 = this.add.tween(from).to( { x: initialPos}, 1000, Phaser.Easing.Linear.None);
  tween1.chain(tween2);
  tween2.chain(tween3);
  tween1.start();
};


module.exports = Game;
