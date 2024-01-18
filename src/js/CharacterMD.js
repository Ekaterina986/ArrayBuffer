import Character from "./Character";
export default class CharacterMD extends Character {
    dist = 1;
    /**
     * Флаг. «дурман»
     */
    set stoned(val) {
        this._stoned = val;
    }
    get stoned() {
        return this._stoned;
    }

    set attack(val) {
        this._attack = val;
    }
    get attack() {
        let attack;
        if (!this.stoned) {
            attack = this._attack - this._attack * (this.dist - 1)/10
        } else {
            attack = this._attack - Math.log2(this.dist) * 5
        }
        if (attack < 0 ) {
            attack = 0;
        }
        return attack
    }

}