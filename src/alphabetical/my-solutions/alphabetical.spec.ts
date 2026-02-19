import { describe, expect, it } from "vitest";
import { alphabetical } from "./alphabetical";

describe("alphabetical", () => {
  it("should return an array of string in alphabetic order", () => {
    const given = ["ball", "joker", "peacock", "amazon", "zach"];
    const actual = alphabetical(given);
    expect(actual).toEqual(["amazon", "ball", "joker", "peacock", "zach"]);
  });

  it("should handle elements of the same value", () => {
    const given = ["C#", "JavaScript", "Java", "Python", "C#", "Ruby"];
    const actual = alphabetical(given);
    expect(actual).toEqual([
      "C#",
      "C#",
      "Java",
      "JavaScript",
      "Python",
      "Ruby",
    ]);
  });
});
