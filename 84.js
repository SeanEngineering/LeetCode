/*
    Input: heights = [2,1,5,6,2,3]
    Output: 10
    Explanation: The above is a histogram where width of each bar is 1.
    The largest rectangle is shown in the red area, which has an area = 10 units.

    Input: heights = [2,4]
    Output: 4
*/

/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = (heights) => {
    let stack = [];
    for (let i = 0; i < heights.length; i++){
        if (stack.length == 0 ){
            stack.push(heights[i]);
        } (if ())

    }
    
};

const heights = [2,4]

console.log(largestRectangleArea(heights));