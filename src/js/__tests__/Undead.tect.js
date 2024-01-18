import Undead from '../Undead';

test('create copy', () => {
    const undead = new Undead( 'abc');

    const correct = {
        type: 'Undead',
        name: 'abc',
        attack: 25,
        defence: 25,
        level: 1,
        health: 100,
    }

    expect (undead).toEqual(correct);

});