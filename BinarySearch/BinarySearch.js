var binSearch = (nums, target, start, end) => {
  var middle = start + parseInt((end - start) / 2, 10)
  if (nums[middle] == target) return middle
  if (end<= start) {
    return -1
  }
  if (target < nums[middle]) return binSearch(nums, target, start, middle - 1)
  if (target > nums[middle]) return binSearch(nums, target, middle + 1, end)
}

const nums = [0, 1, 2, 3, 4, 5, 6]
const nums2 = [0]
const nums3 = [0, 1]
const nums4 = [0, 1, 2]
const nums5 = [-1, 0, 3, 5, 9, 12]
var output = binSearch(nums5, 9, 0, nums5.length - 1)

// Target = 6
// start: 0 middle: 3 end: 6
// start: 3 middle: 4 end: 6
// start: 4 middle: 5 end: 6

// Target = 0
// start: 0 middle: 3 end: 6
// start: 0 middle: 1 end: 3


console.log(output)