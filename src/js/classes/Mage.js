import Character from './Character';

export default class Mage extends Character {
  constructor(name, type) {
    super(name, type);
    this.atackDefault = 10;
    this.defence = 40;
    this.spoiledAtack = undefined;
  }

  get stoned() {
    return this.spoiledAtack;
  }

  set stoned(cell) {
    this.spoiledAtack = this.atackDefault - 5 * Math.log2(cell);
    if (this.spoiledAtack < 0) {
      this.spoiledAtack = 0;
    }
  }

  get atack() {
    return this.spoiledAtack;
  }

  set atack(cell) {
    this.spoiledAtack = (1 - cell / 10) * this.atackDefault;
    if (this.spoiledAtack < 0) {
      this.spoiledAtack = 0;
    }
  }
}