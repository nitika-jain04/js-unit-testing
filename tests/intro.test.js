import { describe, test, it, expect } from "vitest";
import { factorial, fizzBuzz, max } from "../src/intro";

describe("max", () => {
  it("should return the first arg if it is greater", () => {
    const a = 2;
    const b = 1;

    const res = max(a, b);

    expect(res).toBe(2);
  });

  it("should return the second arg if it is greater", () => {
    const a = 1;
    const b = 2;

    const res = max(a, b);

    expect(res).toBe(2);
  });

  it("should return the first arg if args are equal", () => {
    const a = 2;
    const b = 2;

    const res = max(a, b);

    expect(res).toBe(2);
  });
});

describe("fizzBuzz", () => {
  it("should return FizzBuzz if divisible by both 3 and 5", () => {
    const n = 15;

    const res = fizzBuzz(n);

    expect(res).toBe("FizzBuzz");
  });

  it("should return Fizz if divisible by 3", () => {
    const n = 21;

    const res = fizzBuzz(n);

    expect(res).toBe("Fizz");
  });

  it("should return Buzz if divisible by 5", () => {
    const n = 20;

    const res = fizzBuzz(n);

    expect(res).toBe("Buzz");
  });
});

describe("factorial", () => {
  it("shld return 1 if arg is 0", () => {
    expect(factorial(0)).toBe(1);
  });

  // it("shld return 1 if arg is 1", () => {
  //   expect(factorial(1)).toBe(1);
  // });

  it("shld return 24 if arg is 4", () => {
    expect(factorial(4)).toBe(24);
  });

  it("shld return undefined if arg is less than 0", () => {
    expect(factorial(-2)).toBeUndefined();
  });
});
