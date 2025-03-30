import { describe, test, it, expect } from "vitest";
import { max } from "../src/intro";

describe("max", () => {
  it("should return the first arg if it is greater", () => {
    const a = 2;
    const b = 1;

    const res = max(a, b);

    expect(res).toBe(2);
  });
});
