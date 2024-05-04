import { expect, test } from "bun:test";
import { rotateImage } from "../problems/rotate.image";

test("rotateImage should rotate an image clockwise", () => {
  expect(rotateImage([
    [1, 2, 3, 4],
    [4, 5, 6, 5],
    [7, 8, 9, 3]
  ])).toEqual([
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
    [3, 5, 4],
  ]);
});
