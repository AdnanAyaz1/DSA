// Swap alternatives

const swapAlternatives = (arr) => {
  console.log(`Orignal Array ${arr}  lenght:${parseInt(arr.length / 2)}`);
  for (let i = 0; i < parseInt(arr.length / 2) * 2; i += 2) {
    let j = i + 1;
    if (arr[i] != arr[j]) {
      let tem_var = arr[i];
      arr[i] = arr[j];
      arr[j] = tem_var;
    }
  }
  console.log(`Swapped Array ${arr}`);
};

const arr = [1, 2, 3, 4, 5, 6, 7];
swapAlternatives(arr);

// Sorted Sqaures
const sortedSquares = function (nums) {
  return nums.map((el) => el * el).sort((a, b) => a - b);
};
let nums = [-4, -1, 0, 3, 10];

// Sorted by Parity
const sortArrayByParity = function (nums) {
  const even_number_array = nums.filter((num) => num % 2 == 0);
  const odd_number_array = nums.filter((num) => num % 2 !== 0);
  return even_number_array.concat(odd_number_array);
};

// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.
const relativeSortArray = function (arr1, arr2) {
  // find unique elemenst and seperate them
  const unique_elements = arr1
    .filter((el) => !arr2.includes(el))
    .sort((a, b) => a - b);
  let new_array = [];
  arr2.forEach((num_2) => {
    arr1.forEach((num_1) => {
      if (num_1 === num_2) {
        new_array.push(num_1);
      }
    });
  });
  return new_array.concat(unique_elements);
};

const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
const arr2 = [2, 1, 4, 3, 9, 6];
relativeSortArray(arr1, arr2);

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

const runningSum = function (nums) {
  let sum = nums[0];
  let new_array = [sum];
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
    new_array.push(sum);
  }
  return new_array;
};

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.
//[1,7,3,6,5,6]
const pivotIndex = function (arr) {
  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i] || arr[0];
    console.log("splc", arr);
    arr.splice(0, 1);
    let rightSum = arr.reduce((acc, num) => {
      return acc + num;
    }, 0);
    if (leftSum == rightSum) {
      return i;
    }
  }

  // let sumleft = 0;
  //for (let i = 0; i < arr.length; i++) {
  //     let sumRight = 0;
  //     sumleft += arr[i - 1] || 0;
  //     for (let j = i + 1; j < arr.length; j++) {
  //       sumRight += arr[j];
  //     }
  //     if (sumleft === sumRight) {
  //       return i;
  //     }
  //   }
  console.log("left sum ", leftSum);
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// Example 1:

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
