import { createPrevArgSaver } from './createPrevArgSaver';

const argSaver = createPrevArgSaver();

describe('createPrevArgSaver function', () => {
  it('should return undefined when pass 123', () => {
    expect(argSaver(123)).toBe(undefined);
  });

  it('should return 123 when pass 456', () => {
    expect(argSaver(456)).toBe(123);
  });

  it('should return 123 when pass 100, 200, 300', () => {
    expect(argSaver(100, 200, 300)).toBe(456);
  });

  it('should return 100 when pass nothing', () => {
    expect(argSaver()).toBe(100);
  });

  it('should return undefined when pass 741', () => {
    expect(argSaver(741)).toBe(undefined);
  });
});
