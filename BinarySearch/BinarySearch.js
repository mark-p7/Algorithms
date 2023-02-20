var binarySearch = (nums, target, start, end) => {
    var middle = start + Math.floor((end - start) / 2)
    if (nums[middle] == target) return middle
    if (end <= start) {
        return -1
    }
    if (target < nums[middle]) return binarySearch(nums, target, start, middle - 1)
    if (target > nums[middle]) return binarySearch(nums, target, middle + 1, end)
}

// Target = -3
const nums = [0, 1, 2, 3, 4, 5, 6]; // 3
const nums2 = [0]; // -1
const nums3 = [0, 1]; // -1
const nums4 = [0, 1, 2]; // -1
const nums5 = [-1, 0, 3, 5, 9, 12]; // 2

const inputs = [nums, nums2, nums3, nums4, nums5]

inputs.forEach((input) => {
    console.log(binarySearch(input, 3, 0, nums.length - 1))
})

