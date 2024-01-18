import Swordsman from '../Swordsman';

test('create copy', () => {
    const swordsman = new Swordsman( 'abc');

    const correct = {
        type: 'Swordsman',
        name: 'abc',
        attack: 40,
        defence: 10,
        level: 1,
        health: 100,
    }

    expect (swordsman).toEqual(correct);

});