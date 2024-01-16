import Character from './Character';

export default class Mage extends Character {
  constructor(name, type) {
    super(name, type);
    this.atack = 10;
    this.defence = 40;
    this.stoned = false;
    this.distance = 0;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get atack() {
    if (this.distance < 0 || this.distance > 5) {
        return 0;
    }

    let atack = this._atack - (this._atack / 10) * (this.distance - 1);

    if (this.stoned === true) {
        atack -= Math.log2(this.distance) * 5;
    }

    return Math.floor(atack);
  }

  set atack(value) {
    this._atack = value;
  }
}