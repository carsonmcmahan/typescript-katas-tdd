import { describe, expect, it } from "vitest";
import { fruitCounter } from "./fruit-counter";

describe("fruitCounter", () => {
  it("should return an object with the fruit as a key and the number of fruit as the value", () => {});
  const given = ["🍉", "🍇", "🍇", "🍉", "🍎", "🍈"];
  const actual = fruitCounter(given);
  expect(actual).toEqual({ "🍉": 2, "🍇": 2, "🍎": 1, "🍈": 1 });
});
