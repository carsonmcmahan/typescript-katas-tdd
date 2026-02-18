import { describe, expect, it } from "vitest";
import { fizzBuzz } from "./fizz-buzz";

describe("fizzBuzz", () => {
  it("should return a list with a length of the same number", () => {
    const given = 2;
    const actual = fizzBuzz(given);
    expect(actual).toHaveLength(2);
  });

  it("should replace number divisible by 3 with fizz", () => {
    const given = 3;
    const actual = fizzBuzz(given);
    expect(actual).toEqual([1, 2, "fizz"]);
  });

  it("should replace number divisible by 5 with buzz", () => {
    const given = 5;
    const actual = fizzBuzz(given);
    expect(actual).toEqual([1, 2, "fizz", 4, "buzz"]);
  });

  it("should replace number divisible by 3 and 5 with fizzbuzz", () => {
    const given = 15;
    const actual = fizzBuzz(given);
    expect(actual).toEqual([
      1,
      2,
      "fizz",
      4,
      "buzz",
      "fizz",
      7,
      8,
      "fizz",
      "buzz",
      11,
      "fizz",
      13,
      14,
      "fizzbuzz",
    ]);
  });
});
