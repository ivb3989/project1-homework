import { createAdder } from './createAdder';

const adder1 = createAdder();
const adder2 = createAdder(100);

describe('createAdder function', () => {
  it('should return 0 when call adder1()', () => {
    expect(adder1()).toBe(0);
  });

  it('should return 30 when call adder1(10, 20)', () => {
    expect(adder1(10, 20)).toBe(30);
  });

  it('should return 100 when call adder1(30, 40)', () => {
    expect(adder1(30, 40)).toBe(100);
  });

  it('should return 110 when call adder2(10)', () => {
    expect(adder2(10)).toBe(110);
  });

  it('should return 200 when call adder2(20, 30, 40)', () => {
    expect(adder2(20, 30, 40)).toBe(200);
  });

  it('should return 200 when call adder2()', () => {
    expect(adder2()).toBe(200);
  });
});
