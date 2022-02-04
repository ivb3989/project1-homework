import { makeArmy } from './makeArmy';

const shooters = makeArmy(10);

describe('makeArmy function', () => {
  it('should return 0 when call shooters[0]()', () => {
    expect(shooters[0]()).toBe(0);
  });

  it('should return 5 when call shooters[5]()', () => {
    expect(shooters[5]()).toBe(5);
  });

  it('should return 9 when call shooters[9]()', () => {
    expect(shooters[9]()).toBe(9);
  });
});
