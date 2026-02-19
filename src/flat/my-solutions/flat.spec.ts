import { describe, expect, it } from "vitest";
import { flat } from "./flat";

describe("flat", () => {
  it("should return an empty array if no arrays passed", () => {
    const actual = flat();
    expect(actual).toEqual([]);
  });

  it("should combine two simples arrays into one", () => {
    const arrayOne = [1, 2, 3];
    const arrayTwo = [4, 5, 6];

    const actual = flat(arrayOne, arrayTwo);
    expect(actual).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("passes in four arrays with only one value", () => {
    const actual = flat([1], [2], [3], [4]);
    expect(actual).toEqual([1, 2, 3, 4]);
  });

  it("empty is passed, should not include it", () => {
    const actual = flat([1, 2, 3], [], [4, 5]);
    expect(actual).toEqual([1, 2, 3, 4, 5]);
  });
});
