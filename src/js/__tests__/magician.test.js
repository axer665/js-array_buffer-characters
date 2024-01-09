import Magician from "../classes/Magician";

test("Magician creation", () => {
    const magician = new Magician("magician");
    const correct = {name: "magician", type: "Magician", health: 100, level: 1, atackDefault: 10, spoiledAtack: undefined, defence: 40};
    expect(magician).toEqual(correct);
});