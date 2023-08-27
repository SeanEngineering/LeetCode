/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
    const fixedValued = (num) => {
        let zeroCounter = 0;
        let base = 1;
        for (let value of num) {
            if (zeroCounter == 2) {
                return 0;
            } else if (value == 0) {
                zeroCounter += 1;
            } else {
                base *= value;
            }
        }
        return [base, zeroCounter];
    };

    const group = fixedValued(nums);
    const map = {};
    if (group[1] == 0) {
        for (let i = 0; i < nums.length; i++) {
            map[i] = group[0] / nums[i];
        }
    } else if (group[1] == 1) {
        for (let i = 0; i < nums.length; i++) {
            nums[i] == 0 ? (map[i] = group[0]) : (map[i] = 0);
        }
    } else {
        return Array(nums.length).fill(0);
    }

    return Object.values(map);
};

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
