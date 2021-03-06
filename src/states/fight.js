function Fight() {}
/*
--------------------------------------------------------------------------------
Creation de la scene
declaration des variables des joueurs
declaration des variables interfaces
--------------------------------------------------------------------------------
*/
Fight.prototype.create = function() {
     player1Alive = true;
     p1attack = 5; p1attackId = 0;
     p1init = 5; p1initId = 0;
     p1avoid = 5; p1avoidId = 0;
     p1armor = 5; p1armorId = 0;
     p1life = 100;
     p1block = 5; p1blockId = 0;

     player2Alive = true;
     p2attack = 5; p2attackId = 0;
     p2init = 5; p2initId = 0;
     p2avoid = 5; p2avoidId = 0;
     p2armor = 5; p2armorId = 0;
     p2life = 100;
     p2block = 5;p2blockId = 0;
    console.log('Fight');
    background = this.add.image(0, 0, "background");

    background.width = 800;
    background.height = 600;
    p1name = 'rouis';
    p2name = 'david';
    player1 = this.add.group();
    player2 = this.add.group();
    xpos = this.world.centerX;
    ypos = this.world.centerY;
    // this.input.onDown.add(this.onInputDown, this);

    this.GenerateStuff();
    this.createP1();
    this.createP2();
    p1_name = this.add.bitmapText(50, 20, 'carrier_command',  p1name, 10);
    p2_name = this.add.bitmapText(675, 20, 'carrier_command',  p2name, 10);
    p1_hp = this.add.bitmapText(50, 40, 'carrier_command', 'HP: '  + p1life, 10);
    p2_hp = this.add.bitmapText(675, 40, 'carrier_command', 'HP: ' + p2life, 10);
    p1_armor = this.add.bitmapText(50, 60, 'carrier_command', 'Armor: ' + p1armor, 10);
    p2_armor = this.add.bitmapText(675, 60, 'carrier_command', 'Armor: ' + p2armor, 10);
    p1_attack = this.add.bitmapText(50, 80, 'carrier_command', 'Attack: ' + p1attack, 10);
    p2_attack = this.add.bitmapText(675, 80, 'carrier_command', 'Attack: ' + p2attack, 10);
    p1_init = this.add.bitmapText(50, 100, 'carrier_command', 'Init: ' + p1init, 10);
    p2_init = this.add.bitmapText(675, 100, 'carrier_command', 'Init: ' + p2init, 10);
    FightTurn = 0;
    animation = false;
    this.CheckPlayersInit();
};
/*
--------------------------------------------------------------------------------
Boucle de Jeu
--------------------------------------------------------------------------------
*/
Fight.prototype.update = function() {
  if ((player1Alive == true) && (player2Alive == true)) {
    if(animation == false)
      {
        if (FightTurn == 0)
          {
          this.Player1Turn();
          FightTurn = 1;
          }
        else if (FightTurn == 1)
          {
            this.Player2Turn();
            FightTurn = 0;
          }
      this.CheckPlayersAreAlive();
      }
      p1_hp.setText('HP: ' + p1life);
      p2_hp.setText('HP: ' + p2life);
    }
};
/*
--------------------------------------------------------------------------------
SI un bouton est appuyé .....
--------------------------------------------------------------------------------
*/
Fight.prototype.onInputDown = function() {
};

/*
--------------------------------------------------------------------------------
Generation du Stuff d'un joueur
--------------------------------------------------------------------------------
*/
Fight.prototype.GenerateStuff = function() {
  Armor = this.GenerateArmor(p1armor, 1);
  p1armor = Armor;
  Init = this.GenerateInit(p1init, 1);
  p1init = Init;
  Avoid = this.GenerateAvoid(p1avoid, 1);
  p1avoid = Avoid;
  Weapon = this.GenerateWeapon(p1attack, 1);
  p1attack = Weapon;
  Block = this.GenerateBlock(p1block, 1);
  p1block = Block;

  Armor = this.GenerateArmor(p2armor, 2);
  p2armor = Armor;
  Init = this.GenerateInit(p2init, 2);
  p2init = Init;
  Avoid = this.GenerateAvoid(p2avoid, 2);
  p2avoid = Avoid;
  Weapon = this.GenerateWeapon(p2attack, 2);
  p2attack = Weapon;
  Block = this.GenerateBlock(p2block, 2);
  p2block = Block;
  return 1;
};
/*
--------------------------------------------------------------------------------
Generation de la statistique Initiative
--------------------------------------------------------------------------------
*/
Fight.prototype.GenerateInit = function(init, player) {
  var Helmets = [];
  Helmets[0] = 31;
  Helmets[1] = 85;
  Helmets[2] = 139;
  Helmets[3] = 193;
  Helmets[4] = 247;
  var randHelmets = this.rnd.integerInRange(0, 4);
  init = randHelmets + 8;
  if (player == 1)
  {
      p1initId = Helmets[randHelmets];
  }
  else {
      p2initId = Helmets[randHelmets];
  }
  return init;
};
/*
--------------------------------------------------------------------------------
Generation de la statistique Block
--------------------------------------------------------------------------------
*/
Fight.prototype.GenerateBlock = function(block, player) {
  var Shields = [];
  Shields[0] = 36;
  Shields[1] = 37;
  Shields[2] = 38;
  Shields[3] = 39;
  Shields[4] = 40;
  var randShields = this.rnd.integerInRange(0, 4);
  block = randShields + 8;
  if (player == 1)
  {
      p1blockId = Shields[randShields];
  }
  else {
      p2blockId = Shields[randShields];
  }
  return block;
};
/*
--------------------------------------------------------------------------------
Generation de la statistique Avoid
--------------------------------------------------------------------------------
*/
Fight.prototype.GenerateAvoid = function(avoid, player) {
  var Pants = [];
  Pants[0] = 3;
  Pants[1] = 57;
  Pants[2] = 111;
  Pants[3] = 165;
  Pants[4] = 219;
  var randPants = this.rnd.integerInRange(0, 4);
  avoid = randPants + 8;
  if (player == 1)
  {
      p1avoidId = Pants[randPants];
  }
  else {
      p2avoidId = Pants[randPants];
  }

  return avoid;
};
/*
--------------------------------------------------------------------------------
Generation de la statistique Armor
--------------------------------------------------------------------------------
*/
Fight.prototype.GenerateArmor = function(armor, player) {
  var Armors = [];
  Armors[0] = 9;
  Armors[1] = 63;
  Armors[2] = 117;
  Armors[3] = 171;
  Armors[4] = 225;
  var randArmors = this.rnd.integerInRange(0, 4);
  armor = randArmors + 4;
  if (player == 1)
  {
      p1armorId = Armors[randArmors];
  }
  else {
      p2armorId = Armors[randArmors];
  }

  return armor;
};
/*
--------------------------------------------------------------------------------
Generation de la statistique Weapons / Attack
--------------------------------------------------------------------------------
*/
Fight.prototype.GenerateWeapon = function(attack, player) {
  var Weapons = [];
  Weapons[0] = 368;
  Weapons[1] = 51;
  Weapons[2] = 422;
  Weapons[3] = 49;
  Weapons[4] = 47;

  var randWeapons = this.rnd.integerInRange(0, 4);
  attack = randWeapons + 16;
  if (player == 1)
  {
      p1attackId = Weapons[randWeapons];
  }
  else {
      p2attackId = Weapons[randWeapons];
  }
  return attack;
};
/*
--------------------------------------------------------------------------------
Tour du joueur 1
--------------------------------------------------------------------------------
*/
Fight.prototype.Player1Turn = function() {
    animation = true;
    animationAttack = this.animAttack(player1, player2);
    newlife = this.Attack(p2life, p2armor, p2avoid, p1attack, p2block, player2, player1);
    p2life = newlife;
    return 0;
};

/*
--------------------------------------------------------------------------------
Tour du joueur 2
--------------------------------------------------------------------------------
*/
Fight.prototype.Player2Turn = function() {
    animation = true;
    animationAttack = this.animAttack(player2, player1);
    newlife2 = this.Attack(p1life, p1armor, p1avoid, p2attack, p1block, player1, player2);
    p1life = newlife2;
    return 0;
};
/*
--------------------------------------------------------------------------------
Verification de la vie des joueurs et de leurs existence
--------------------------------------------------------------------------------
*/
Fight.prototype.CheckPlayersAreAlive = function() {
  if(p1life <= 0)
  {
    player1Alive = false;
    p1life = 0;
    if (animationDeath = this.animDeath(player1) == 1)
    {
        console.log('player 1 Death');
        gameOver = this.add.bitmapText(200, 200, 'carrier_command', p2name + ' WINS !!! ', 34);
        this.animVictory(player2);
    }
  }
  if(p2life <= 0) {
    player2Alive = false;
    p2life = 0;
    if (animationDeath = this.animDeath(player2) == 1)
    {
      console.log('player 2 Death');
      gameOver = this.add.bitmapText(200, 200, 'carrier_command', p1name + ' WINS !!! ', 34);
      this.animVictory(player1);
    }
  }
  return 0;
};

/*
--------------------------------------------------------------------------------
Fonction d'attack
Gestion d'esquive
Gestion de blockage
Gestion de l'armure
--------------------------------------------------------------------------------
*/
Fight.prototype.Attack = function(life, armor, avoid, attack, block, target, from) {
    if (life > 0) {
        damage = attack - armor;
        if(damage <= 0)
        {
          damage = 1;
        }

        var rand1 = this.rnd.integerInRange(0, 100);
        if (avoid > rand1)
        {
              console.log('AVOID');
              if (animationAvoid = this.animAvoid(target, from) == 1)
              {
                console.log('AVOID COMPLETED');
              }
        }
        else if (block > rand1)
        {
            console.log('BLOCK');

            if (animationBlock = this.animBlock(target, from) == 1)
            {
              console.log('BLOCK COMPLETED');
            }
        }
        else {

            if (animationDamage =  this.animDamage(target) == 1)
            {
              console.log('DAMAGE COMPLETED');
              life = life - damage;
            }
        }
    }
    return life;
};
/*
--------------------------------------------------------------------------------
Verification de la variable statistique Initiative
Definis quel joueurs commencent
--------------------------------------------------------------------------------
*/
Fight.prototype.CheckPlayersInit = function() {

    if (p1init > p2init) {
        FightTurn = 0;

    } else if (p1init < p2init) {
        FightTurn = 1;
    } else if (p1init == p2init) {
        var rand1 = this.rnd.integerInRange(0, 100);
        var rand2 = this.rnd.integerInRange(0, 100);
        if (rand1 < rand2) {
            FightTurn = 0;
        } else {
            FightTurn = 1;
        }
    }
    return 0;
};
/*
--------------------------------------------------------------------------------
Creation du Joueur 1
--------------------------------------------------------------------------------
*/
Fight.prototype.createP1 = function() {
    p1x = 20;
    p1y = 600 - 150;
    p1body = this.add.sprite(p1x, p1y, 'spritesheet');
    p1weapon = this.add.sprite(p1x, p1y, 'spritesheet');
    p1pants = this.add.sprite(p1x, p1y, 'spritesheet');
    p1hair = this.add.sprite(p1x, p1y, 'spritesheet');
    p1helmet = this.add.sprite(p1x, p1y, 'spritesheet');
    p1protection = this.add.sprite(p1x, p1y, 'spritesheet');
    p1shield = this.add.sprite(p1x, p1y, 'spritesheet');
    p1body.frame = 1;
    p1body.scale.setTo(6);
    p1weapon.frame = p1attackId;
    p1weapon.scale.setTo(6);
    p1pants.frame = p1avoidId;
    p1pants.scale.setTo(6);
    p1hair.frame = 19;
    p1hair.scale.setTo(6);
    p1helmet.frame = p1initId;
    p1helmet.scale.setTo(6);
    p1protection.frame = p1armorId;
    p1protection.scale.setTo(6);
    p1shield.frame = p1blockId;
    p1shield.scale.setTo(6);

    player1.add(p1body);
    player1.add(p1pants);
    player1.add(p1hair);
    player1.add(p1helmet);
    player1.add(p1protection);
    player1.add(p1weapon);
    player1.add(p1shield);
    return 0;
};
/*
--------------------------------------------------------------------------------
Creation du Joueur 2
--------------------------------------------------------------------------------
*/
Fight.prototype.createP2 = function() {
    p2x = 800 - 20;
    p2y = 600 - 150;
    p2body = this.add.sprite(p2x, p2y, 'spritesheet');
    p2weapon = this.add.sprite(p2x, p2y, 'spritesheet');
    p2pants = this.add.sprite(p2x, p2y, 'spritesheet');
    p2hair = this.add.sprite(p2x, p2y, 'spritesheet');
    p2helmet = this.add.sprite(p2x, p2y, 'spritesheet');
    p2protection = this.add.sprite(p2x, p2y, 'spritesheet');
    p2shield = this.add.sprite(p2x, p2y, 'spritesheet');
    p2body.frame = 1;
    p2body.scale.setTo(-6, 6);
    p2weapon.frame = p2attackId;
    p2weapon.scale.setTo(-6, 6);
    p2pants.frame = p2avoidId;
    p2pants.scale.setTo(-6, 6);
    p2hair.frame = 22;
    p2hair.scale.setTo(-6, 6);
    p2helmet.frame = p2initId;
    p2helmet.scale.setTo(-6, 6);
    p2protection.frame = p2armorId;
    p2protection.scale.setTo(-6, 6);
    p2shield.frame = p2blockId;
    p2shield.scale.setTo(-6, 6);
    player2.add(p2body);
    player2.add(p2pants);
    player2.add(p2hair);
    player2.add(p2helmet);
    player2.add(p2protection);
    player2.add(p2weapon);
    player2.add(p2shield);
    return 0;
};
/*
--------------------------------------------------------------------------------
Animation d'attaque
--------------------------------------------------------------------------------
*/
Fight.prototype.animAttack = function(from, to) {
    if (from.children[1].x < to.children[1].x) {
        side = 1;
        initialPos = 0;
        move = 690 - 90;
    } else {
        side = -1;
        initialPos = 0;
        move = -690 + 90;
    }
    tween1 = this.add.tween(from).to({
        x: move
    }, 300, Phaser.Easing.Linear.None);
    tween2 = this.add.tween(from.children[5]).to({
        x: from.children[5].world.x + 5 * side,
        y: from.children[5].world.y + 5,
    }, 200, Phaser.Easing.Linear.None, false, 0, 0, true);
    tween3 = this.add.tween(from).to({
        x: initialPos
    }, 1000, Phaser.Easing.Linear.None);
    tween1.chain(tween2);
    tween2.chain(tween3);
    tween3.onComplete.add(doSomething, this);

    function doSomething() {
      console.log('animation completed');
      animation = false;
    }
    tween1.start();

};
/*
--------------------------------------------------------------------------------
Animation d'attaque
--------------------------------------------------------------------------------
*/
Fight.prototype.animAvoid = function(from, to) {
    if (from.children[1].x < to.children[1].x) {
        side = 1;
        initialPos = 0;
        move = -50;
    } else {
        side = -1;
        initialPos = 0;
        move = 50;
    }
    tween1 = this.add.tween(from).to({
        x: move
    }, 300, Phaser.Easing.Linear.None);
    tween2 = this.add.tween(from).to({
        x: initialPos
    }, 1000, Phaser.Easing.Linear.None);
    tween1.chain(tween2);
    tween2.onComplete.add(doSomething, this);

    function doSomething() {
        return(1);
    }
    tween1.start();

};
/*
--------------------------------------------------------------------------------
Animation de mort
--------------------------------------------------------------------------------
*/
Fight.prototype.animDeath = function(from) {
  deathTween = this.add.tween(from).to({
    alpha: 0
  }, 300, Phaser.Easing.Linear.None);
  deathTween.start();
  return 1;
};

/*
--------------------------------------------------------------------------------
Animation de dégats
--------------------------------------------------------------------------------
*/
Fight.prototype.animDamage = function(from) {
  damageTween = this.add.tween(from).to({
    alpha: 0
  }, 100, Phaser.Easing.Linear.None, true, 0, 0, true);
  damageTween.start();
  return 1;
};

/*
--------------------------------------------------------------------------------
Animation de victoire
--------------------------------------------------------------------------------
*/
Fight.prototype.animVictory = function(from) {
  animVictory = this.add.tween(from.children[5]).to({
    y: +435
  }, 300, Phaser.Easing.Linear.None, true, 0, 0, true);
  animVictory.repeat();
  animVictory2 = this.add.tween(from.children[6]).to({
    y: +435
  }, 300, Phaser.Easing.Linear.None, true, 0, 0, true);
  animVictory2.repeat();
  replay = this.add.bitmapText(this.game.width * 0.5, 290, 'carrier_command', 'Replay', 32);
  replay.anchor.set(0.5);
  replay.inputEnabled = true;
  replay.events.onInputDown.add(this.replay, this);
  menu = this.add.bitmapText(this.game.width * 0.5, 350, 'carrier_command', 'Menu', 32);
  menu.anchor.set(0.5);
  menu.inputEnabled = true;
  menu.events.onInputDown.add(this.returnMenu, this);

  return 1;
};

/*
--------------------------------------------------------------------------------
Rejouer
--------------------------------------------------------------------------------
*/
Fight.prototype.replay = function() {
  this.game.state.start('fight');
};

/*
--------------------------------------------------------------------------------
Revenir au menu
--------------------------------------------------------------------------------
*/
Fight.prototype.returnMenu = function() {
  this.game.state.start('menu');
};

/*
--------------------------------------------------------------------------------
Animation de blockage
--------------------------------------------------------------------------------
*/
Fight.prototype.animBlock = function(from, to) {
    if (from.children[1].x < to.children[1].x) {
        side = 1;
        initialPos = 0;
        move = 690 - 90;
    } else {
        side = -1;
        initialPos = 0;
        move = -690 + 90;
    }
    tween1 = this.add.tween(from.children[6]).to({
        x: from.children[6].world.x + 5 * side,
        y: from.children[6].world.y - 5,
    }, 200, Phaser.Easing.Linear.None, false, 0, 0, true);
    tween1.onComplete.add(doSomething, this);

    function doSomething() {
      return 1;
    }
    tween1.start();

};

module.exports = Fight;
