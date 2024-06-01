const { ArrayBufferConverter, getBuffer } = require('./path_to_your_converter');

describe('ArrayBufferConverter', () => {
  test('should convert an ArrayBuffer to a string', () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();
    converter.load(buffer);
    const result = converter.toString();
    expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });

  test('should handle empty buffer correctly', () => {
    const converter = new ArrayBufferConverter();
    converter.load(new ArrayBuffer(0));
    const result = converter.toString();
    expect(result).toBe('');
  });
});