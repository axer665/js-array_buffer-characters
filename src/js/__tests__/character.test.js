import Character from "../classes/Character";

import Daemon from "../classes/Daemon";
import Magician from "../classes/Magician";

// Персонажи, которые понадобятся нам для тестирования
let daemon = new Daemon("daemon");
let magician = new Magician("magician");

// Правильно ли создаются наследники
test.each([
    [daemon, {name: "daemon", type: "Daemon", health: 100, level: 1, atackDefault: 10, spoiledAtack: undefined, defence: 40}],
    [magician, {name: "magician", type: "Magician", health: 100, level: 1, atackDefault: 10, spoiledAtack: undefined, defence: 40}]
])('atack', (character, state) => {
    const result = character;
    expect(result).toEqual(state);
});


// Проверка повышения уровня зомби
test("Daemon levelup", () => {
    daemon.levelUp();

    const expected = 
        {
            atackDefault: 12,
            defence: 48,
            health: 100,
            level: 2,
            name: "daemon",
            spoiledAtack: undefined,
            type: "Daemon"
        };

    const result = daemon;

    expect(result).toEqual(expected);
});

// Проверка получения урона демоном 2 уровня
test("Daemon damage 5", () => {
    const expected = 97.4;
    daemon.damage(5);
    const result = daemon.health;
    expect(result).toBeCloseTo(expected);
});

// Проверка на неправильное введение имени персонажа
test("Long name", () => {
    expect(() => new Daemon("Mikhail Romanovich")).toThrow(Error);
});

// Проверка на тип персонажа
test("Invalid type", () => {
    expect(() => new Character("Jonny", "Archer")).toThrow(Error);
});

// Проверка на повышение уровня уже мертвого персонажа
test("Dead character levelup", () => {
    magician.damage(100000);
    expect(() => magician.levelUp()).toThrow(Error);
});

// Проверка на нанесение урона мертвому персонажу
test("Damage to a dead character", () => {
    expect(() => magician.damage(10)).toThrow(Error);
});

// Проверка на нанесение урона магом на расстоянии по немагам
test('Damage dealt by mages within range on non-mages', () => {
    daemon.atack = 4;
    expect(daemon.atack).toBeCloseTo(7.2);
});

// Проверка на нанесение урона магом на расстоянии, большем, чем радиус действия, по немагам
test('Damage dealt by mages out of range on non-mages', () => {
    daemon.atack = 20;
    expect(daemon.atack).toBe(0);
});

// Проверка на нанесение урона магом на расстоянии по магам
test('Damage dealt by mages within range on mages', () => {
    daemon.stoned = 4;
    expect(daemon.stoned).toBe(2);
});

// Проверка на нанесение урона магом на расстоянии, большем, чем радиус действия, по магам
test('Damage dealt by mages out of range on mages', () => {
    daemon.stoned = 40;
    expect(daemon.stoned).toBe(0);
});
