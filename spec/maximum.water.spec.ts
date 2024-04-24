import { expect, test } from "bun:test";
import { mySolution, betterSolution } from "../problems/maximum.water";

test("mySolution - Example 1", () => {
  const result = mySolution([1, 8, 6, 2, 5, 4, 8, 3, 7]);
  expect(result).toBe(49);
});

test("betterSolution - Example 1", () => {
  const result = betterSolution([1, 8, 6, 2, 5, 4, 8, 3, 7]);
  expect(result).toBe(49);
});

test("mySolution - Example 2", () => {
  const result = mySolution([4, 3, 2, 1, 4]);
  expect(result).toBe(16);
});

test("betterSolution - Example 2", () => {
  const result = betterSolution([4, 3, 2, 1, 4]);
  expect(result).toBe(16);
});

test("mySolution - Example 3", () => {
  const result = mySolution([1, 2, 1]);
  expect(result).toBe(2);
});

test("betterSolution - Example 3", () => {
  const result = betterSolution([1, 2, 1]);
  expect(result).toBe(2);
});