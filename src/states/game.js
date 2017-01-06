function Game() {}

Game.prototype.create = function() {
    console.log('Game');
    var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, 'ARENA', {
        font: '42px Arial',
        fill: '#ffffff',
        align: 'center'
    });
    text.anchor.set(0.5);
    this.input.onDown.add(this.onInputDown, this);

    this.game.state.start('arena');
};

Game.prototype.update = function() {


};

Game.prototype.onInputDown = function() {
    this.game.state.start('arena');
};

module.exports = Game;
