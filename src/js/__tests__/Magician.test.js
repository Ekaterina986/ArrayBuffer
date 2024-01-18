import Magician from '../Magician';

test('create copy', () => {
    const magician = new Magician( 'abc');

    const correct = {
        type: 'Magician',
        name: 'abc',
        _attack: 10,
        defence: 40,
        level: 1,
        health: 100,
        dist:1
    }

    expect (magician).toEqual(correct);

    expect (magician.attack).toBe(10);
    magician.dist = 2;
    expect (magician.attack).toBe(9);
    magician.dist = 3;
    expect (magician.attack).toBe(8);
    magician.dist = 4;
    expect (magician.attack).toBe(7);
    magician.dist = 5;
    expect (magician.attack).toBe(6);
    magician.dist = 6;
    expect (magician.attack).toBe(5);
    magician.dist = 7;
    expect (magician.attack).toBe(4);
    magician.dist = 8;
    expect (magician.attack).toBe(3);
    magician.dist = 9;
    expect (magician.attack).toBe(2);
    magician.dist = 10;
    expect (magician.attack).toBe(1);
    magician.dist = 11;
    expect (magician.attack).toBe(0);
    magician.dist = 12;
    expect (magician.attack).toBe(0);

    magician.stoned = true;
    magician.dist = 2;
    expect (magician.attack).toBe(5);
    magician.dist = 3;
    expect (magician.attack).toBe(2.0751874963942196);
    magician.dist = 4;
    expect (magician.attack).toBe(0);
    magician.dist = 5;
    expect (magician.attack).toBe(0);


});