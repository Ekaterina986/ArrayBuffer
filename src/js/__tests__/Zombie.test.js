import Zombie from '../Zombie';

test('create copy', () => {
    const zombie = new Zombie( 'abc');

    const correct = {
        type: 'Zombie',
        name: 'abc',
        attack: 40,
        defence: 10,
        level: 1,
        health: 100,
    }

    expect (zombie).toEqual(correct);

});
