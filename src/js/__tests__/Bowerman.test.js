import Bowerman from '../Bowerman';

test('create copy', () => {
    const bowerman = new Bowerman( 'abc');

    const correct = {
        type: 'Bowerman',
        name: 'abc',
        attack: 25,
        defence: 25,
        level: 1,
        health: 100,
    }

    expect (bowerman).toEqual(correct);

});