import { squareList } from './squareList';

describe('squareList function', () => {
  it('should return [16, 1764, 36] when pass [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]', () => {
    expect(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])).toStrictEqual([
      16, 1764, 36,
    ]);
  });

  it('should return [9, 100, 49] when pass [-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]', () => {
    expect(
      squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]),
    ).toStrictEqual([9, 100, 49]);
  });
});
