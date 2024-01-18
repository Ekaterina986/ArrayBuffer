import CharacterMD from "./CharacterMD";

export default class Magician extends CharacterMD {
    constructor(name) {
        super(name, 'Magician');
        this.attack = 10;
        this.defence = 40;
    }
}