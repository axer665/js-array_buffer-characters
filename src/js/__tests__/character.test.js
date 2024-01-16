import Character from "../classes/Character";

import Daemon from "../classes/Daemon";
import Magician from "../classes/Magician";

// Персонажи, которые понадобятся нам для тестирования
let daemon = new Daemon("daemon");
let magician = new Magician("magician");

// Правильно ли создаются наследники
test.each([
    [daemon, { name: "daemon", type: "Daemon", health: 100, level: 1, _atack: 10, _stoned: false, distance: 0, defence: 40 }],
    [magician, { name: "magician", type: "Magician", health: 100, level: 1, _atack: 10, _stoned: false, distance: 0, defence: 40 }]
])('atack', (character, state) => {
    const result = character;
    expect(result).toEqual(state);
});


// Проверка повышения уровня зомби
test("Daemon levelup", () => {
    daemon.levelUp();

    const expected =
    {
        _atack: 13.2,
        defence: 48,
        health: 100,
        level: 2,
        name: "daemon",
        _stoned: false,
        distance: 0,
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

// Магический персонаж атакует клетку 2 (без дурмана)
test('Magician attack cell 2 whith the dope', () => {
    magician.stoned = false;
    magician.distance = 2;
    const result = magician.atack;
    expect(result).toBe(9);
});

// Магические персонаж атакует клетку 2 (с дурманом)
test('Magician attack cell 2 whithout dope', () => {
    magician.stoned = true;
    magician.distance = 2;
    const result = magician.atack;
    expect(result).toBe(4);
});

// Магический персонаж атакует клетку 6 (без дурмана)
test('Daemon attack cell 6 whithout dope', () => {
    daemon.stoned = false;
    daemon.distance = 6;
    const result = daemon.atack;
    expect(result).toBe(0);
});