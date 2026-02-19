import { describe, expect, it } from "vitest";
import { calculator } from "./calculator";

describe("calculator", () => {
  it("should handle sum operations", () => {
    const given = "1 + 1";
    const actual = calculator(given);
    expect(actual).toBe(2);
  });

  it("should handle subtraction operations", () => {
    const given = "5 - 3";
    const actual = calculator(given);
    expect(actual).toBe(2);
  });

  it("should handle multiple operations", () => {
    const given = "5 + 6 - 2 + 20 - 29";
    const actual = calculator(given);
    expect(actual).toBe(0);
  });
});
