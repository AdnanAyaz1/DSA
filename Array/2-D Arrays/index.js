// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

const rotate = (matrix) => {
  let k = matrix[0].length - 1;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length ; j++) {
      matrix[i][j] = matrix[k][j];
    }
  }
  k--;
  console.log(matrix);
};

// Example 1:

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
