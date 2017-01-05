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
    this.animattackp1();
};

Game.prototype.update = function() {

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
    p1x = 20;
    p1y = 600 - 150;
    p1body = this.add.sprite(p1x, p1y, 'spritesheet');
    p1weapon = this.add.sprite(p1x, p1y, 'spritesheet');
    p1pants = this.add.sprite(p1x, p1y, 'spritesheet');
    p1hair = this.add.sprite(p1x, p1y, 'spritesheet');
    p1body.frame = 1;
    p1body.scale.setTo(6);
    p1weapon.frame = 368;
    p1weapon.scale.setTo(6);
    p1pants.frame = 3;
    p1pants.scale.setTo(6);
    p1hair.frame = 19;
    p1hair.scale.setTo(6);

    player1.add(p1body);
    player1.add(p1pants);
    player1.add(p1hair);
    player1.add(p1weapon);
    return 0;
};

Game.prototype.createP2 = function() {
    p2x = 800 - 20;
    p2y = 600 - 150;
    p2body = this.add.sprite(p2x, p2y, 'spritesheet');
    p2weapon = this.add.sprite(p2x, p2y, 'spritesheet');
    p2pants = this.add.sprite(p2x, p2y, 'spritesheet');
    p2hair = this.add.sprite(p2x, p2y, 'spritesheet');
    p2body.frame = 1;
    p2body.scale.setTo(-6, 6);
    p2weapon.frame = 51;
    p2weapon.scale.setTo(-6, 6);
    p2pants.frame = 57;
    p2pants.scale.setTo(-6, 6);
    p2hair.frame = 22;
    p2hair.scale.setTo(-6, 6);

    player2.add(p2body);
    player2.add(p2pants);
    player2.add(p2hair);
    player2.add(p2weapon);
    return 0;
};

Game.prototype.animattackp1 = function() {
  this.add.tween(player1).to( { x: player2.x }, 4000, Phaser.Easing.Bounce.Out, true);
};


module.exports = Game;
