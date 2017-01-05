function Arena() {}

Arena.prototype.create = function() {
    console.log('Arena');
    var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, 'ARENA', {
        font: '42px Arial',
        fill: '#ffffff',
        align: 'center'
    });
    text.anchor.set(0.5);
    this.input.onDown.add(this.onInputDown, this);
    this.arena.state.start('fight');
};

Arena.prototype.update = function() {


};

Arena.prototype.onInputDown = function() {
    this.game.state.start('fight');
};
