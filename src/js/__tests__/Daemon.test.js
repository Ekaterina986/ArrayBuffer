import Daemon from '../Daemon';

test('create copy', () => {
    const daemon = new Daemon( 'abc');

    const correct = {
        type: 'Daemon',
        name: 'abc',
        _attack: 10,
        defence: 40,
        level: 1,
        health: 100,
        dist:1
    }

    expect (daemon).toEqual(correct);
    expect (daemon).toEqual(correct);

    expect (daemon.attack).toBe(10);
    daemon.dist = 2;
    expect (daemon.attack).toBe(9);
    daemon.dist = 3;
    expect (daemon.attack).toBe(8);
    daemon.dist = 4;
    expect (daemon.attack).toBe(7);
    daemon.dist = 5;
    expect (daemon.attack).toBe(6);
    daemon.dist = 6;
    expect (daemon.attack).toBe(5);
    daemon.dist = 7;
    expect (daemon.attack).toBe(4);
    daemon.dist = 8;
    expect (daemon.attack).toBe(3);
    daemon.dist = 9;
    expect (daemon.attack).toBe(2);
    daemon.dist = 10;
    expect (daemon.attack).toBe(1);
    daemon.dist = 11;
    expect (daemon.attack).toBe(0);
    daemon.dist = 12;
    expect (daemon.attack).toBe(0);

    daemon.stoned = true;
    daemon.dist = 2;
    expect (daemon.attack).toBe(5);
    daemon.dist = 3;
    expect (daemon.attack).toBe(2.0751874963942196);
    daemon.dist = 4;
    expect (daemon.attack).toBe(0);
    daemon.dist = 5;
    expect (daemon.attack).toBe(0);
});