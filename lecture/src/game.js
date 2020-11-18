console.log('game')
const Asteroid = require('./asteroid');

function Game() {
    this.asteroid = new Asteroid();
}

module.exports = Game;

// const game = new Game();

// console.log(game);