function Arena() {}

Arena.prototype.create = function() {
    console.log('Arena');
    waiting = this.add.bitmapText(300, 200, 'carrier_command', 'WAITING FOR PLAYERS 1', 10);
    this.input.onDown.add(this.onInputDown, this);
    player1 = false;
    player2 = false;

  //  this.game.state.start('fight');
};

Arena.prototype.update = function() {
if(player1 == true)
{
waiting.setText('WAITING FOR PLAYERS 2');
if(player2 == true)
{
waiting.setText('READY');
this.game.state.start('fight');
}
}

};

Arena.prototype.onInputDown = function() {
    //this.game.state.start('fight');
};

module.exports = Arena;
