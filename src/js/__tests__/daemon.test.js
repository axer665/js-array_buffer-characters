import Daemon from "../classes/Daemon";

test("Daemon creation", () => {
    const daemon = new Daemon("daemon");
    const correct = {name: "daemon", type: "Daemon", health: 100, level: 1, _atack : 10, _stoned: false, distance: 0, defence: 40};
    expect(daemon).toMatchObject(correct);
});