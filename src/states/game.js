function Game() {}

Game.prototype.create = function() {
    this.input.onDown.add(this.onInputDown, this);

    player1 = this.add.sprite(40, 100, 'spritesheet');
    player1.frame = 0;
    player1.scale.setTo(3);
    player2 = this.add.sprite(40, 100, 'spritesheet');
    player2.frame = 54;
    player2.scale.setTo(3);

};

Game.prototype.update = function() {};

Game.prototype.onInputDown = function() {
    // this.game.state.start('gameover');
    player2.frame += 1;
};

module.exports = Game;