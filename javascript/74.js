/*
 You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let lowerIndexArray = 0;
    let upperIndexArray = matrix.length;
    let index;
    if (
        target < matrix[0][0] ||
        target > matrix[matrix.length - 1][matrix[matrix.length - 1].length]
    )
        return false;
    while (
        lowerIndexArray <= upperIndexArray &&
        lowerIndexArray < matrix.length
    ) {
        index = halfPoint(lowerIndexArray, upperIndexArray);
        let [lower, upper] = getBounds(matrix[index]);
        console.log(lower, upper);
        if (target <= upper && target >= lower) {
            console.log('range found');
            console.log(lowerIndexArray, upperIndexArray);
            if (search(matrix[index], target) >= 0) {
                return true;
            } else {
                return false;
            }
        } else if (target > upper) {
            console.log(
                `lower increasing ${lowerIndexArray} to ${lowerIndexArray + 1}`
            );
            lowerIndexArray = index + 1;
        } else {
            upperIndexArray = index - 1;
        }
    }
    return false;
};

var search = function (nums, target) {
    let lowerIndex = 0;
    let upperIndex = nums.length - 1;
    let index;
    while (lowerIndex <= upperIndex) {
        index = halfPoint(lowerIndex, upperIndex);
        if (target == nums[index]) {
            return index;
        } else if (target < nums[index]) {
            upperIndex = index - 1;
        } else {
            lowerIndex = index + 1;
        }
    }

    return -1;
};

const halfPoint = (lower, upper) => {
    return Math.floor((lower + upper) / 2);
};

const getBounds = (array) => {
    return [array[0], array[array.length - 1]];
};

console.log(
    searchMatrix(
        [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 50],
        ],
        5
    )
);

const optimalSolution = (matrix, target) => {
    const [rows, cols] = [matrix.length, matrix[0].length];
    let [left, right] = [0, rows * cols - 1];

    while (left <= right) {
        const mid = (left + right) >> 1;
        const [row, col] = [Math.floor(mid / cols), mid % cols];
        const guess = matrix[row][col];
        const isTarget = guess === target;
        if (isTarget) return true;

        const isTargetGreater = guess < target;
        if (isTargetGreater) left = mid + 1;

        const isTargetLess = target < guess;
        if (isTargetLess) right = mid - 1;
    }
    return false;
};
