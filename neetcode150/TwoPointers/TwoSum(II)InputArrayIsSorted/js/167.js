/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/ 
 * 
 * Implemented 2 pointer approach
 * First pointer will point at the lowest value of array and second pointer will point at the greatest
 * If the 2 elements the pointer point to are less than the target, then we can shift the firstPointer to the right by 1
 * Else if the 2 elements the pointer point to are greater than the target, then we can shift the secondPointer to the left by 1
 * Else we can just assume that the target has been found due to the contraints of at least 1 solution
 */
var twoSum = function (numbers, target) {
    let firstPointer = 0;
    let secondPointer = numbers.length - 1;
    while (true) {
        if (numbers[firstPointer] + numbers[secondPointer] > target) secondPointer -= 1
        else if (numbers[firstPointer] + numbers[secondPointer] < target) firstPointer += 1
        else return [firstPointer + 1, secondPointer + 1]
    }
};