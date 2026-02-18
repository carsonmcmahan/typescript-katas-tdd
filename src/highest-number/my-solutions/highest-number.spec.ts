import { describe, it, expect } from "vitest";
import { highestNumber } from "./highest-number";

describe("highestNumber", () => {
  it("should get the highest number given an array of one number", () => {
    const given = [100];
    const actual = highestNumber(given);
    expect(actual).toBe(100);
  });

  it("should get the highest number given an array of several numbers", () => {
    const given = [1, 3, 2];
    const actual = highestNumber(given);
    expect(actual).toBe(3);
  });
});
