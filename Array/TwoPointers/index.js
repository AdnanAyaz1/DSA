// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// const removeDuplicates = function (nums) {
//   let j = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[j - 1]) {
//       nums[j] = nums[i];
//       j++;
//     }
//   }

//   return j;
// };
// console.log(removeDuplicates([0, 0, 0, 1, 1, 1, 2, 2, 2]));
// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// const sortedSquares = function (nums) {
//      return nums.map((el) => el * el).sort((a, b) => a - b);
//   };

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// var sortArrayByParity = function (nums) {
//     const even_number_array = nums.filter(num => num % 2 == 0)
//     const odd_number_array = nums.filter(num => num % 2 !== 0)
//     return even_number_array.concat(odd_number_array)
// };

const moveZeroes = function (nums) {
    let j=0
    for(let i=0 ;i<nums.length;i++)
    {
      if(nums[i]!==0)
      {
        [nums[j],nums[i]]=[nums[i],nums[j]]
        j++
      }
      console.log("swap",nums)
    }
    console.log(nums)
    return nums
  };
  
console.log(moveZeroes([0,1,0,3,12]))
//   Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]