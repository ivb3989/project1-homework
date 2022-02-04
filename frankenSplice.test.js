import { frankenSplice } from './frankenSplice';

describe('frankenSplice function', () => {
  it('should return [4, 1, 2, 3, 5] when pass [1, 2, 3], [4, 5], 1',()=>{
    expect(frankenSplice([1, 2, 3], [4, 5], 1)).toStrictEqual([4, 1, 2, 3, 5]);
  });

  it('should return  ["head", "shoulders", "claw", "tentacle", "knees", "toes"] when pass ["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2',()=>{
    expect(frankenSplice([1, 2, 3], [4, 5], 1)).toStrictEqual([4, 1, 2, 3, 5]);
  });

  it('should return [1, 2, 3, 4] when pass 0',()=>{
    expect(frankenSplice([1, 2, 3, 4], [], 0)).toStrictEqual([1, 2, 3, 4]);
  });
});
