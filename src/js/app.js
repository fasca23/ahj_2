import goblinImg from '../img/goblin.png';

class Game {
  constructor() {
    this.previosPosition = 0;
    this.field = document.querySelectorAll('.game_field');
  }

  static activeImg() {
    const img = document.createElement('img');
    img.src = goblinImg;
    return img;
  }

  static dellImg() {
    const img = document.querySelector('img');
    if (img) {
      img.remove();
    }
  }

  static randomNumber(maximum) {
    return Math.floor(Math.random() * maximum);
  }

  randomInsert() {
    const cordField = Game.randomNumber(this.field[0].children.length);
    if (cordField === this.previosPosition) {
      this.randomInsert();
    } else {
      this.previosPosition = cordField;
      this.field[0].children[cordField].appendChild(Game.activeImg());
    }
  }

  main() {
    Game.dellImg();
    this.randomInsert();
  }
}

const newGame = new Game();

setInterval(() => newGame.main(), 1500);
