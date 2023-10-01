/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

var topKFrequent = function (nums, k) {
    const map = {};
    for (const number of nums) {
        map[number] != undefined
            ? (map[number] = map[number] + 1)
            : (map[number] = 1);
    }
    const sortable = [];

    for (const key in map) {
        sortable.push([key, map[key]]);
    }

    sortable.sort((a, b) => {
        return b[1] - a[1];
    });

    const finalValues = [];
    sortable.slice(0, k).forEach((item) => {
        finalValues.push(item[0]);
    });

    return finalValues;
};
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
