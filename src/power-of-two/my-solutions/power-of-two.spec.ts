import { describe, expect, it } from "vitest";
import { powerOfTwo } from "./power-of-two";

describe("powerOfTwo", () => {
  it("should return an array of numbers to the power of two.", () => {
    const given = [1, 2, 3, 4];
    const actual = powerOfTwo(given);
    expect(actual).toEqual([1, 4, 9, 16]);
  });

  it("should return an array of numbers to the power of two with negative numbers", () => {
    const given = [-1, 2, -3, 4];
    const actual = powerOfTwo(given);
    expect(actual).toEqual([1, 4, 9, 16]);
  });
});
