
export const mySolution = function (height: Array<number>) {
  let maxArea = 0;
  for (let i = 0; i <= height.length; i++) {
    for (let j = 1; j <= height.length; j++) {
      let currentArea = (j - i) * Math.min(height[i], height[j]);
      if (currentArea > maxArea) {
        maxArea = currentArea;
      }
    }
  }
  return maxArea;
};

export const betterSolution = function (height: Array<number>) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const currentArea = (right - left) * Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, currentArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};