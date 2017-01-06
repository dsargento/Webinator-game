function Preloader() {
    this.asset = null;
    this.ready = false;
}

Preloader.prototype.preload = function() {
    this.load.bitmapFont('carrier_command', 'assets/carrier_command.png', 'assets/carrier_command.xml');
    this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
    this.load.image("background", "assets/fond.png");
    this.load.image("menuBackground", "assets/menu.png");
    this.load.spritesheet('spritesheet', 'assets/roguelikeChar_transparent2.png', 16, 16, -1, 0, 1);

    this.load.setPreloadSprite(this.asset);

    // this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    // this.loadResources();
    this.ready = true;
};

Preloader.prototype.loadResources = function() {
    // load your resources here
};

Preloader.prototype.create = function() {

};

Preloader.prototype.update = function() {
    // if (!!this.ready) {
    this.game.state.start('menu');
    // }
};

Preloader.prototype.onLoadComplete = function() {
    // this.ready = true;
};

module.exports = Preloader;
