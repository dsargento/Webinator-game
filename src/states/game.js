function Game() {}

Game.prototype.create = function() {
    console.log('Game');
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
      p1attack = 10;
      p1init = 50;
      p1avoid = 50;
      p1armor = 3;
      p1life = 100;
      p1block = 10;

    }
    if (this.createP2() == 0)
    {
      p2init = 50;
      player2Alive = true;
      p2attack = 10;
      p2avoid = 20;
      p2armor = 4;
      p2life = 100;
      p2block = 10;
    }
    p1hp = this.add.bitmapText(10, 30, 'carrier_command', 'HP: '  + p1life, 34);
    p2hp = this.add.bitmapText(500, 30, 'carrier_command', 'HP: ' + p2life, 34);
    GameTurn = 0;
    this.CheckPlayersInit();
};

Game.prototype.update = function() {
  if((player1Alive == true) && (player2Alive == true))
  {
    if(GameTurn == 0)
    {
      this.Player1Turn();
      GameTurn = 1;
    }
    else if(GameTurn == 1)
    {
      this.Player2Turn();
      GameTurn = 0;
    }
    this.CheckPlayersAreAlive();
  }
};

Game.prototype.Player1Turn = function() {
  //CheckWeapon();
  newlife = this.Attack(p2life, p2armor, p2avoid, p1attack);
  p2life = newlife;
};


Game.prototype.Player2Turn = function() {
  //CheckWeapon();
  newlife = this.Attack(p1life, p1armor, p1avoid, p2attack);
  p1life = newlife;
};

Game.prototype.CheckPlayersAreAlive = function() {
  if(p1life <= 0)
  {
    player1Alive = false;
    p1life = 0;
  }
  else   if(p2life <= 0) {
    player2Alive = false;
    p2life = 0;
  }
  p1hp.setText('HP: ' + p1life);
  p2hp.setText('HP: ' + p2life);
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
  }
  return life;
};


/*Game.prototype.CheckWeapon = function() {

};*/

Game.prototype.CheckPlayersInit = function() {

  if(p1init > p2init)
  {
    GameTurn = 0;

  }
  else if (p1init  < p2init)
  {
    GameTurn = 1;
  }
  else if (p1init  ==  p2init)
  {
    var rand1 = this.rnd.integerInRange(0, 100);
    var rand2 = this.rnd.integerInRange(0, 100);
    if(rand1 < rand2)
    {
      GameTurn = 0;
    }
    else
    {
      GameTurn = 1;
    }
  }
  return GameTurn;
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

};


module.exports = Game;
