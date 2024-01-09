export default class Character {
    constructor(name, type) {
        let types = [
            "Bowman", 
            "Swordsman", 
            "Magician", 
            "Daemon", 
            "Undead", 
            "Zombie"
        ];
        if (name.length > 10 || name.length < 2) {
            throw new Error("A character's name cannot be shorter than 2 symbols and longer than 10 symbols");
        } 
        if (!types.includes(type)) {
            throw new Error("The character type is limited to the values: Bowman, Swordsman, Magician, Daemon, Undead, Zombie");
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.atackDefault = undefined;
        this.defence = undefined;
    }

    levelUp() {
        if (this.health > 0) {
            this.level++;
            this.atackDefault += Number(this.atackDefault) * 0.2;
            this.defence += Number(this.defence) * 0.2;
            this.health = 100;
        } else {
            throw new Error("Character is dead. It's impossible to upgrade");
        }
    }

    damage(points) {
        if (this.health <= 0) {
            throw new Error('The hero is dead.');
        }
        this.health -= points * (1 - Number(this.defence) / 100);
    }
}