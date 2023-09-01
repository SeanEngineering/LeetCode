/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
    const set = new Set(nums);
    let longest = 0;

    for (const i of nums) {
        if (!set.has(i - 1)) {
            let length = 0;
            while (set.has(i + length)) {
                length++;
                length > longest ? (longest = length) : null;
            }
        }
    }
    return longest;
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
