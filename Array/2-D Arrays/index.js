// 867. Transpose Matrix
// Easy
// Topics
// Companies
// Hint
// Given a 2D integer array matrix, return the transpose of matrix.

// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

// const transpose = (matrix) => {
//   const rows = matrix.length;
//   const cols = matrix[0].length;
//   const result = Array.from({ length: cols }, () => Array(rows).fill(0));

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       result[j][i] = matrix[i][j];
//     }
//   }

//   return result;
// };
// console.log(
//   transpose([
//     [1, 2, 3],
//     [4, 5, 6],
//   ])
// );
// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// const transpose2 = (matrix) => {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = i + 1; j < matrix.length; j++) {
//       [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//     }
//   }
//   return matrix;
// };
// const rotate = function (matrix) {
//   transpose2(matrix);
//   for (let i = 0; i < matrix.length; i++) {
//     matrix[i].reverse();
//   }
//   return matrix;
// };
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// iven a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

// const diagonalSum = function (mat) {
//   const length = mat.length - 1;
//   let total_sum = 0;
//   let intersection_num = 0;
//   for (let i = 0; i < mat.length; i++) {
//     if (i == length - i) {
//       intersection_num = mat[i][i];
//       continue;
//     }
//     total_sum += mat[i][i];
//     total_sum += mat[i][length - i];
//   }

//   return total_sum + intersection_num;
// };

// console.log(
//   diagonalSum([
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//   ])
// );

// Example 1:

// Input: mat = [[1,2,3],
//               [4,5,6],
//               [7,8,9]]
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25

// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

const searchMatrix = function (matrix, target) {
  let column_pointer = matrix[0].length - 1;

  if (matrix.length == 1) {
    while (column_pointer >= 0) {
      if (matrix[0][column_pointer] == target) {
        return true;
      } else {
        column_pointer--;
      }
    }
  }

  if (matrix[0].length == 1) {
    let matrix_length = matrix.length;
    for (let i = 0; i < matrix_length; i++) {
      if (matrix[i][0] === target) {
        return true;
      }
    }
  }

  if (matrix.length == 2) {
    for (let i = 0; i < 2; i++) {
      if (target > matrix[i][column_pointer]) {
        continue;
      } else {
        while (column_pointer > 0) {
          if (matrix[i][column_pointer] == target) {
            return true;
          }
          column_pointer--;
        }
      }
    }
  }

  const loop_run_time = parseInt(matrix.length / 2);
  if (target < matrix[loop_run_time][column_pointer]) {
    if (target >= matrix[loop_run_time][0]) {
      while (column_pointer >= 0) {
        if (matrix[loop_run_time][column_pointer] === target) {
          return true;
        }
        column_pointer--;
      }
    } else {
      for (let i = 0; i < loop_run_time; i++) {
        if (
          target > matrix[i][column_pointer] ||
          target < matrix[i][0]
        ) {
          continue;
        } else {
          while (column_pointer >= 0) {
            if (matrix[i][column_pointer] === target) {
              return true;
            }
            column_pointer--;
          }
        }
      }
    }
  } else if (target == matrix[loop_run_time][column_pointer]) {
    return true;
  } else {
    for (let i = loop_run_time + 1; i < matrix.length; i++) {
      if (target > matrix[i][column_pointer] || target < matrix[i][0]) {
        continue;
      } else {
        while (column_pointer >= 0) {
          if (matrix[i][column_pointer] === target) {
            return true;
          }
          column_pointer--;
        }
      }
    }
  }
  return false;
};
console.log(
  searchMatrix(
    [
      [-9, -9, -9, -7, -5, -3, -3, -3],
      [-2, -2, 0, 1, 2, 3, 3, 4],
      [5, 5, 5, 7, 9, 11, 11, 12],
      [14, 14, 15, 16, 18, 18, 19, 20],
      [21, 23, 24, 25, 27, 29, 30, 31],
      [34, 35, 37, 38, 38, 38, 40, 40],
      [42, 44, 44, 45, 47, 47, 47, 48],
      [50, 51, 51, 52, 53, 54, 56, 56],
      [58, 59, 60, 62, 64, 64, 64, 66],
    ],
    5
  )
);
// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
