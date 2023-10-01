/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
    const stack = [];
    const result = [];
    // Add cStack if oStack
    const backtrack = (openN, closedN) => {
        if (openN == closedN && openN == n) {
            result.push(stack.join(''));
            return;
        }
        if (openN < n) {
            stack.push('(');
            backtrack(openN + 1, closedN);
            stack.pop();
        }
        if (closedN < openN) {
            stack.push(')');
            backtrack(openN, closedN + 1);
            stack.pop();
        }
    };
    backtrack(0, 0);
    return result;
};

console.log(generateParenthesis(3));
