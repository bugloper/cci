import { expect, test } from "bun:test";
import { transposeMatrix } from "../problems/transpose.matrix";

test("transposeMatrix should transpose a matrix correctly 1", () => {
  expect(transposeMatrix([
    [1, 2, 3, 4],
    [4, 5, 6, 5],
    [7, 8, 9, 3]
  ])).toEqual([
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [4, 5, 3],
  ]);
});

test("transposeMatrix should transpose a matrix correctly 2", () => {
  expect(transposeMatrix([
    [1, 3, 4],
    [4, 6, 5],
    [7, 9, 3]
  ])).toEqual([
    [1, 4, 7],
    [3, 6, 9],
    [4, 5, 3],
  ]);
});
