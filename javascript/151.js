/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let min = Math.round((left + right) / 2);
    let pointer;
    while (left < right) {
        pointer = Math.round((left + right) / 2);
        if (nums[left] < nums[pointer]) {
            min = Math.min(min, nums[left]);
            right = pointer - 1;
        } else {
            min = Math.min(min, nums[right]);
            left = pointer + 1;
        }
    }
    return min;
};

console.log(findMin([11, 13, 15, 17]));
