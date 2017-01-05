function Fight() {}

Fight.prototype.create = function() {
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
    this.input.onDown.add(this.onInputDown, this);
    if (this.createP1() == 0) {
        player1Alive = true;
        p1attack = 10;
        p1init = 50;
        p1avoid = 50;
        p1armor = 3;
        p1life = 100;
        p1block = 10;

    }
    if (this.createP2() == 0) {
        p2init = 50;
        player2Alive = true;
        p2attack = 10;
        p2avoid = 20;
        p2armor = 4;
        p2life = 100;
        p2block = 10;
    }
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
    this.CheckPlayersInit();
};

Fight.prototype.update = function() {
    if ((player1Alive == true) && (player2Alive == true)) {
        if (FightTurn == 0) {
            this.Player1Turn();
            FightTurn = 1;
        } else if (FightTurn == 1) {
            this.Player2Turn();
            FightTurn = 0;
        }
        this.CheckPlayersAreAlive();
    }
};

Fight.prototype.Player1Turn = function() {
    //CheckWeapon();
    newlife = this.Attack(p2life, p2armor, p2avoid, p1attack, player1, player2);
    p2life = newlife;
};


Fight.prototype.Player2Turn = function() {
    //CheckWeapon();
    newlife = this.Attack(p1life, p1armor, p1avoid, p2attack, player2, player1);
    p1life = newlife;
};

Fight.prototype.CheckPlayersAreAlive = function() {
  if(p1life <= 0)
  {
    player1Alive = false;
    p1life = 0;
  }
  else   if(p2life <= 0) {
    player2Alive = false;
    p2life = 0;
  }
  p1_hp.setText('HP: ' + p1life);
  p2_hp.setText('HP: ' + p2life);
};


Fight.prototype.Attack = function(life, armor, avoid, attack, from , to) {
    if (life > 0) {
        damage = attack - armor;
        var rand1 = this.rnd.integerInRange(0, 100);
        if (avoid < rand1) {
            this.animattack(from, to);
            life = life - damage;
        }
    }
    return life;
};


/*Fight.prototype.CheckWeapon = function() {

};*/

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
    return FightTurn;
};


Fight.prototype.onInputDown = function() {

};

Fight.prototype.createP1 = function() {
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

Fight.prototype.createP2 = function() {
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

Fight.prototype.animattack = function(from, to) {
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
    tween2 = this.add.tween(from.children[3]).to({
        x: from.children[3].world.x + 5 * side,
        y: from.children[3].world.y + 5,
    }, 200, Phaser.Easing.Linear.None, false, 0, 0, true);
    tween3 = this.add.tween(from).to({
        x: initialPos
    }, 1000, Phaser.Easing.Linear.None);
    tween1.chain(tween2);
    tween2.chain(tween3);
    tween3.onComplete.add(doSomething, this);

    function doSomething() {
        return(1);
    }
    tween1.start();

};


module.exports = Fight;
