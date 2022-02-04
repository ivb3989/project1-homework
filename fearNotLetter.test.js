import { fearNotLetter } from './fearNotLetter';

describe('fearNotLetter function', () => {
  it('should return "d" when pass "abce"', () => {
    expect(fearNotLetter('abce')).toBe('d');
  });

  it('should return "i" when pass "abcdefghjklmno"', () => {
    expect(fearNotLetter('abcdefghjklmno')).toBe('i');
  });

  it('should return "u" when pass "stvwx"', () => {
    expect(fearNotLetter('stvwx')).toBe('u');
  });

  it('should return undefined when pass "abcdefghijklmnopqrstuvwxyz"', () => {
    expect(fearNotLetter('abcdefghijklmnopqrstuvwxyz')).toBe(undefined);
  });
});
