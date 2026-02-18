import { describe, expect, it } from "vitest";
import { forEach } from "./for-each";

describe("forEach", () => {
  it("should execute a callback for each iteration of a given array", () => {
    const given = [1, 2, 3];
    let total = 0;

    forEach(given, () => total++);
    expect(total).toBe(3);
  });

  it("should access the element is is iterating over", () => {
    const given = [1, 2, 3];
    const actual: Array<number> = [];

    forEach(given, (element) => actual.push(element));
    expect(actual).toEqual([1, 2, 3]);
  });
});
