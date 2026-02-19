import { describe, expect, it } from "vitest";
import { grouper } from "./reduce.grouper";

describe("grouper", () => {
  it("return an object with age as key and an array of people with that age", () => {
    const given = [
      { name: "Alex", age: 24 },
      { name: "Jordan", age: 31 },
      { name: "Taylor", age: 45 },
      { name: "Morgan", age: 24 },
      { name: "Casey", age: 19 },
      { name: "Riley", age: 31 },
      { name: "Quinn", age: 52 },
      { name: "Skyler", age: 45 },
      { name: "Jamie", age: 28 },
      { name: "Reese", age: 37 },
    ];
    const actual = grouper(given);
    expect(actual).toEqual({
      19: ["Casey"],
      24: ["Alex", "Morgan"],
      28: ["Jamie"],
      31: ["Jordan", "Riley"],
      37: ["Reese"],
      45: ["Taylor", "Skyler"],
      52: ["Quinn"],
    });
  });

  it("should group everyone together if all ages are identical", () => {
    const given = [
      { name: "Alex", age: 24 },
      { name: "Morgan", age: 24 },
    ];
    const actual = grouper(given);
    expect(actual).toEqual({ "24": ["Alex", "Morgan"] });
  });

  it("should handle an of 0 correctly", () => {
    const given = [{ name: "Baby", age: 0 }];
    const actual = grouper(given);
    expect(actual).toEqual({ 0: ["Baby"] });
  });
});
