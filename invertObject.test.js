import { invertObject } from './invertObject';

describe('invertObject function', () => {
  it('should return {} when pass {}', () => {
    expect(invertObject({})).toStrictEqual({});
  });

  it('should return {"bar": "foo"} when pass {"foo": "bar"}', () => {
    expect(invertObject({ foo: 'bar' })).toStrictEqual({ bar: 'foo' });
  });

  it('should return {"2": "1", "4": "2", "6": "3"} when pass {"1": 2, "2": 4, "3": 6}', () => {
    expect(invertObject({
      '1': 2, '2': 4, '3': 6,
    })).toStrictEqual({
      '2': 1, '4': 2, '6': 3,
    });
  });

  it('should return {"bar": "foo"} when pass {"foo": "bar"}', () => {
    expect(invertObject({
      'foo': 'bar', 'hello': 'world', 'js': 'bar',
    })).toStrictEqual(null);
  });
});
