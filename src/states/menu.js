function Menu() {}

Menu.prototype.create = function() {
      console.log('Menu');
    var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, 'MENU', {
        font: '42px Arial',
        fill: '#ffffff',
        align: 'center'
    });
    text.anchor.set(0.5);
    this.input.onDown.add(this.onInputDown, this);
    this.game.state.start('game');
};

Menu.prototype.update = function() {


};

Menu.prototype.onInputDown = function() {
    this.game.state.start('game');
};

module.exports = Menu;
