import { basicOp } from "./basicOp";
import { stringMerge } from "./stringMerge";
import { createPhoneNumber } from "./createPhoneNumber";
import { getOperands } from "./getOperands";
import { getTime } from "./getTime";

describe("basicOp function", () => {
  it("should return the result of numbers after applying the chosen operation", () => {
    expect(basicOp("+", 4, 7)).toBe(11);
    expect(basicOp("-", 15, 18)).toBe(-3);
    expect(basicOp("*", 5, 5)).toBe(25);
    expect(basicOp("/", 49, 7)).toBe(7);
    expect(basicOp("something else", 45, 45)).toBe(0);
  });
});

describe("stringMerge function", () => {
  it('should return "held"', () => {
    expect(stringMerge("hello", "world", "l")).toBe("held");
  });
  it('should return "codinywhere"', () => {
    expect(stringMerge("coding", "anywhere", "n")).toBe("codinywhere");
  });
  it('should return "held"', () => {
    expect(stringMerge("jason", "samson", "s")).toBe("jasamson");
  });
  it('should return "wondeople"', () => {
    expect(stringMerge("wonderful", "people", "e")).toBe("wondeople");
  });
  it('shouldn\'t return "wondeople"', () => {
    expect(stringMerge("wonderful", "people", "v")).toBe(
      'Missing separator: "v"'
    );
  });
});

describe("createPhoneNumber function", () => {
  it('should return "(xxx) xxx-xxxx"', () => {
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe(
      "(123) 456-7890"
    );
  });
});

describe("getOperands function", () => {
  it('should return its operands in the next format: "a: <first operand>, b: <second operand>"', () => {
    expect(getOperands("1 + 2")).toBe("a: 1, b: 2");
    expect(getOperands("1.2 * -3.4")).toBe("a: 1.2, b: -3.4");
    expect(getOperands("1 - 2")).toBe("a: 1, b: 2");
    expect(getOperands("1 - -2")).toBe("a: 1, b: -2");
  });
  it("shouldn't return its operands, if anything goes wrong", () => {
    expect(getOperands("1.2 * -3.4 + 5")).toBe(
      "More than two operands'n'operators are not allowed;("
    );
    expect(getOperands("1.2 % -3.4")).toBe('No match using "1.2 % -3.4"');
  });
});

describe("getTime function", () => {
  it("should return first valid time in this string", () => {
    expect(getTime("Breakfast at 09:00")).toBe("09:00");
    expect(getTime("Breakfast at 09:60, Dinner at 21:00")).toBe("21:00");
    expect(getTime("Breakfast at 09:59, Dinner at 21:00")).toBe("09:59");
  });
  it("should return empty string, if correct time not found", () => {
    expect(getTime("Breakfast at 24:00")).toBe("");
  });
});
