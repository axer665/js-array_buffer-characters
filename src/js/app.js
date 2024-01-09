import Magician from "./classes/Magician";
import Daemon from "./classes/Daemon";

const merlin = new Magician('Merlin');
merlin.atack = 4;
console.log(merlin);

const baal = new Daemon("Baal");
baal.levelUp();
console.log(baal);