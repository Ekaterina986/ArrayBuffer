import CharacterMD from "./CharacterMD";

export default class Daemon extends CharacterMD {
    constructor(name) {
        super(name, 'Daemon');
        this.attack = 10;
        this.defence = 40;
    }
}

