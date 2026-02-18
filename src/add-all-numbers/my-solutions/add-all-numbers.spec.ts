import { describe, expect, it } from "vitest";
import { addAllNumbers } from "./add-all-numbers";

describe("addAllNumbers", () => {
  it("Array length is one, return that number", () => {
    const given = [10000];
    const actual = addAllNumbers(given);
    expect(actual).toEqual(10000);
  });

  it("Add all numbers in an array an return the sum", () => {
    const given = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const actual = addAllNumbers(given);
    expect(actual).toEqual(55);
  });
});
