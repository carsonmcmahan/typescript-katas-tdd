import { describe, expect, it } from "vitest";
import { range } from "./range";

describe("range", () => {
  it("should take two numbers, initial and end, and return a list starting from initial and ending at end", () => {
    const initial = 1;
    const end = 10;
    const actual = range(initial, end);
    expect(actual).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("should handle one number being passed", () => {
    const actual = range(5);
    expect(actual).toEqual([0, 1, 2, 3, 4, 5]);
  });

  it("should handle initial being greater than ending", () => {
    const actual = range(10, 5);
    expect(actual).toEqual([5, 6, 7, 8, 9, 10]);
  });

  it("should handle an initial value of 0 when passing a single argument", () => {
    const actual = range(0);
    expect(actual).toEqual([0]);
  });

  it("should handle an ending value of 0", () => {
    const actual = range(5, 0);
    expect(actual).toEqual([0, 1, 2, 3, 4, 5]);
  });
});
