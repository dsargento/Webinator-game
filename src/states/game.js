function Game() {}

Game.prototype.create = function() {
    background = this.add.image(0, 0, "background");
    p1hp = this.add.bitmapText(10, 30, 'carrier_command', 'HP: 100', 34);
    p2hp = this.add.bitmapText(500, 30, 'carrier_command', 'HP: 100', 34);
    background.width = 800;
    background.height = 600;
    player1 = this.add.group();
    player2 = this.add.group();
    xpos = this.world.centerX;
    ypos = this.world.centerY;
    this.input.onDown.add(this.onInputDown, this);
    this.createP1();
    this.createP2();
    this.animattackp1();
};

Game.prototype.update = function() {

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
};

Game.prototype.animattackp1 = function() {
  this.add.tween(player1).to( { x: player2.x }, 4000, Phaser.Easing.Bounce.Out, true);
};


module.exports = Game;
