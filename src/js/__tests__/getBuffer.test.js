import getBuffer from "../getBuffer";

test('geting buffer', () => {
    const buffer = getBuffer();
    expect(typeof buffer).toBe('object');
    const dataView = new DataView(buffer);
    expect(dataView.byteLength).toBe(106);
  });
  