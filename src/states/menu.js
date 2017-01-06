function Menu() {}

Menu.prototype.create = function() {
    console.log('Menu');
    menuBackground = this.add.image(this.game.width * 0.5, this.game.height * 0.5, "menuBackground");
    menuBackground.height = 600;
    menuBackground.anchor.set(0.5);
    title = this.add.bitmapText(this.game.width * 0.5, 50, 'carrier_command', 'My Rouis', 50);
    title.anchor.set(0.5);
    play = this.add.bitmapText(this.game.width * 0.5, 290, 'carrier_command', 'Play', 32);
    play.anchor.set(0.5);
    play.inputEnabled = true;
    play.events.onInputDown.add(this.onInputDown, this);
};

Menu.prototype.update = function() {


};

Menu.prototype.onInputDown = function() {
    this.game.state.start('game');
};

module.exports = Menu;
