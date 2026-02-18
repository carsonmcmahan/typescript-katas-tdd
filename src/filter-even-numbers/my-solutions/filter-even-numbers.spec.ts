import { describe, expect, it } from "vitest";
import { filterEvenNumbers } from "./filter-even-numbers";

describe("filterEvenNumbers", () => {
  it("list of numbers contains zero even numbers, return an empty array", () => {
    const given = [1, 3, 5, 7, 9];
    const actual = filterEvenNumbers(given);
    expect(actual).toEqual([]);
  });

  it("list of numbers contain even numbers return the even numbers", () => {
    const given = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const actual = filterEvenNumbers(given);
    expect(actual).toEqual([2, 4, 6, 8, 10]);
  });
});
