import { basicOp } from "./basicOp";
import { stringMerge } from "./stringMerge";
import { createPhoneNumber } from "./createPhoneNumber";
import { getOperands } from "./getOperands";
import { getTime } from "./getTime";
import { isPalindrome } from "./isPalindrome";
import { swapCase } from "./swapCase";
import { countOccurrences } from "./countOccurrences";
import { vowelCount } from "./vowelCount";
import { alphabetPosition } from "./alphabetPosition";

describe("basicOp function", () => {
  it("should return 11", () => {
    expect(basicOp("+", 4, 7)).toBe(11);
  });
  it("should return -3", () => {
    expect(basicOp("-", 15, 18)).toBe(-3);
  });
  it("should return 25", () => {
    expect(basicOp("*", 5, 5)).toBe(25);
  });
  it("should return 7", () => {
    expect(basicOp("/", 49, 7)).toBe(7);
    expect(basicOp("something else", 45, 45)).toBe(0);
  });
  it("should return 0", () => {
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
  it('should return "a: 1, b: 2"', () => {
    expect(getOperands("1 + 2")).toBe("a: 1, b: 2");
  });
  it('should return "a: 1.2, b: -3.4"', () => {
    expect(getOperands("1.2 * -3.4")).toBe("a: 1.2, b: -3.4");
  });
  it('should return "a: 1, b: 2"', () => {
    expect(getOperands("1 - 2")).toBe("a: 1, b: 2");
  });
  it('should return "a: 1, b: -2"', () => {
    expect(getOperands("1 - -2")).toBe("a: 1, b: -2");
  });
  it("should return a custom error message", () => {
    expect(getOperands("1.2 * -3.4 + 5")).toBe(
      "More than two operands'n'operators are not allowed;("
    );
    expect(getOperands("1.2 % -3.4")).toBe('No match using "1.2 % -3.4"');
  });
});

describe("getTime function", () => {
  it('should return "09:00"', () => {
    expect(getTime("Breakfast at 09:00")).toBe("09:00");
  });
  it('should return "21:00"', () => {
    expect(getTime("Breakfast at 09:60, Dinner at 21:00")).toBe("21:00");
  });
  it('should return "09:59"', () => {
    expect(getTime("Breakfast at 09:59, Dinner at 21:00")).toBe("09:59");
  });
  it("should return empty string, if correct time not found", () => {
    expect(getTime("Breakfast at 24:00")).toBe("");
  });
});

describe("isPalindrome function", () => {
  it("should return true", () => {
    expect(isPalindrome("Eva, can I see bees in a cave?")).toBe(true);
  });
  it("should return false", () => {
    expect(isPalindrome("race a car")).toBe(false);
  });
  it("should return true", () => {
    expect(isPalindrome("Was it a cat I saw?")).toBe(true);
  });
});

describe("swapCase function", () => {
  it('should return "AbC"', () => {
    expect(swapCase("aBc")).toBe("AbC");
  });
  it('should return "gOOd"', () => {
    expect(swapCase("GooD")).toBe("gOOd");
  });
  it('should return "HELLO"', () => {
    expect(swapCase("hello")).toBe("HELLO");
  });
  it('should return "75386"', () => {
    expect(swapCase("75386")).toBe("75386");
  });
});

describe("countOccurrences function", () => {
  it("should return 2", () => {
    expect(countOccurrences("ability", "i")).toBe(2);
  });
  it("should return 1", () => {
    expect(countOccurrences("abc", "a")).toBe(1);
  });
  it("should return 1", () => {
    expect(countOccurrences("ABC", "a")).toBe(1);
  });
});

describe("vowelCount function", () => {
  it("should return 5", () => {
    expect(vowelCount("abracadabra")).toBe(5);
  });
  it("should return 2", () => {
    expect(vowelCount("letter")).toBe(2);
  });
  it("should return 1", () => {
    expect(vowelCount("toy")).toBe(1);
  });
  it("should return 0", () => {
    expect(vowelCount("555")).toBe(0);
  });
});

describe("alphabetPosition function", () => {
  it("should return the number (count) of vowels in the given string, but no y", () => {
    expect(alphabetPosition("The sunset sets at twelve o' clock.")).toBe(
      "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
    );
  });
});
