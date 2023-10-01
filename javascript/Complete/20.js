/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    if (s.length < 2) {
        return false;
    }
    const checkMap = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    const stack = [s[0]];
    for (let i = 1; i < s.length; i++) {
        if (checkMap[stack[stack.length - 1]] == s[i]) {
            stack.pop();
            console.log(stack);
        } else {
            stack.push(s[i]);
            console.log(stack);
        }
    }
    onsole.log(stack);
    if (stack.length > 0) {
        return false;
    }
    return true;
};

console.log(isValid('()[]{}'));
