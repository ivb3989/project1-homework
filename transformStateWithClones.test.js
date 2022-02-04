import { transformStateWithClones } from './transformStateWithClones';

const info = [
  {
    arguments: [
      {
        foo: 'bar',
        bar: 'foo',
      },
      [
        {
          operation: 'addProperties',
          properties: {
            name: 'Jim',
            hello: 'world',
          },
        },
        {
          operation: 'removeProperties',
          properties: ['bar', 'hello'],
        },
        {
          operation: 'addProperties',
          properties: { another: 'one' },
        },
      ],
    ],
    result: [
      {
        foo: 'bar',
        bar: 'foo',
        name: 'Jim',
        hello: 'world',
      },
      {
        foo: 'bar',
        name: 'Jim',
      },
      {
        foo: 'bar',
        name: 'Jim',
        another: 'one',
      },
    ],
  },
  {
    arguments: [
      {
        foo: 'bar',
        bar: 'foo',
      },
      [
        {
          operation: 'addProperties',
          properties: { yet: 'another property' },
        },
        { operation: 'clear' },
        { operation: 'clear' },
        {
          operation: 'addProperties',
          properties: {
            foo: 'bar',
            name: 'Jim',
          },
        },
      ],
    ],
    result: [
      {
        foo: 'bar',
        bar: 'foo',
        yet: 'another property',
      },
      {},
      {},
      {
        foo: 'bar',
        name: 'Jim',
      },
    ],
  },
  {
    arguments: [
      {},
      [
        {
          operation: 'addProperties',
          properties: { name: 'Jim' },
        },
      ],
    ],
    result: [{ name: 'Jim' }],
  },
];

describe('transformStateWithClones function', () => {
  it(`should return ${info[0].result} when pass ${info[0].arguments}`, () => {

    const result = transformStateWithClones(info[0].arguments[0], info[0].arguments[1]);

    expect(info[0].arguments[0]).toStrictEqual({
      foo: 'bar', bar: 'foo', 
    });
    expect(result).toStrictEqual(info[0].result);

  });

  it(`should return ${info[1].result} when pass ${info[1].arguments}`, () => {

    const result = transformStateWithClones(info[1].arguments[0], info[1].arguments[1]);

    expect(info[1].arguments[0]).toStrictEqual({
      foo: 'bar', bar: 'foo', 
    });
    expect(result).toStrictEqual(info[1].result);

  });

  it(`should return ${info[2].result} when pass ${info[2].arguments}`, () => {

    const result = transformStateWithClones(info[2].arguments[0], info[2].arguments[1]);

    expect(info[2].arguments[0]).toStrictEqual({});
    expect(result).toStrictEqual(info[2].result);

  });

});
