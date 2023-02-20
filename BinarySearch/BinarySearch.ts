/**
 * Binary Search takes in an array of numbers, a target number, a start index, and an end index.
 * It returns the index of the target number if it exists in the array, otherwise it returns -1.
 * Binary Search is a divide and conquer algorithm that works by repeatedly dividing the search interval in half.
 * It is a very efficient algorithm that runs in O(log n) time.
 * @param {Array<number>} nums
 * @param {number} target
 * @param {number} start
 * @param {number} end
 * @returns
 */
var binarySearch = (
  nums: Array<number>,
  target: number,
  start: number,
  end: number
): number => {
  // Find the middle index
  var middle: number = start + Math.floor((end - start) / 2);

  // Base case: If the target is equal to the middle index, return the middle index
  if (nums[middle] == target) return middle;

  // Base case: If the start index is greater than the end index, this means that the target number is not in the array. Therefore, return -1
  if (end <= start) return -1;

  // If the target is less than the middle index, search the left half of the array
  if (target < nums[middle]) {
    return binarySearch(nums, target, start, middle - 1);
  }
  // Else if the target is greater than the middle index, search the right half of the array
  return binarySearch(nums, target, middle + 1, end);
};

// Target = -3
const nums = [0, 1, 2, 3, 4, 5, 6]; // 3
const nums2 = [0]; // -1
const nums3 = [0, 1]; // -1
const nums4 = [0, 1, 2]; // -1
const nums5 = [-1, 0, 3, 5, 9, 12]; // 2

const inputs = [nums, nums2, nums3, nums4, nums5];

inputs.map((input) => {
  console.log(binarySearch(input, 3, 0, input.length - 1));
});
