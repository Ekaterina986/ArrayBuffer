import ArrayBufferConverter from "../ArrayBufferConverter";
import getBuffer from "../getBuffer";

test('convert', () => {
    const buf = getBuffer();
    const converter = new ArrayBufferConverter();
    converter.load(buf);
    const str = converter.toString();
    expect(str).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });
  