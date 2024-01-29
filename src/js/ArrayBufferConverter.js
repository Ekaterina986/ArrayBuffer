
export default class ArrayBufferConverter {
    load(buffer) {
        this.buffer = buffer;
    }
    toString() {
        let str = '';
        let view = new Uint16Array(this.buffer);
        for(let num of view) {
            str += String.fromCodePoint(num);
        }
        return str;
    }
}