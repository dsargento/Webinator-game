const game = new Phaser.Game(800, 600, Phaser.AUTO, 'webinator-repo-game', null, false, false);

game.state.add('boot', require('./states/boot'));
game.state.add('menu', require('./states/menu'));
game.state.add('game', require('./states/game'));
game.state.add('arena', require('./states/arena'));
game.state.add('fight', require('./states/fight'));
game.state.add('preloader', require('./states/preloader'));
game.state.add('gameover', require('./states/gameover'));

game.state.start('boot');
