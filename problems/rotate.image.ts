

export function rotateImage(matrix: Array<Array<number>>): Array<Array<number>> {
  const matrixLen = matrix.length;
  const innerLen = matrix[0].length;
  const transposed: number[][] = [];
  for (let i = 0; i < innerLen; i++) {
    transposed.push([]);
  }
  for (let i = 0; i < matrixLen; i++) {
    for (let j = 0; j < innerLen; j++) {
      transposed[j][i] = matrix[(matrixLen - 1) - i][j];
    }
  }

  return transposed;
}
