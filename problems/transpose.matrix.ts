
export function transposeMatrix(matrix: number[][]): number[][] {
  const matrixLen = matrix.length;
  const innerLen = matrix[0].length;
  const transposed: number[][] = [];
  for (let i = 0; i < innerLen; i++) {
    transposed.push([]);
  }
  for (let i = 0; i < matrixLen; i++) {
    for (let j = 0; j < innerLen; j++) {
      transposed[j][i] = matrix[i][j];
    }
  }

  return transposed;
}
