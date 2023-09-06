/*
Given an array of integers temperatures represents the daily temperatures, 
return an array answer such that answer[i] is the number of days you have to 
wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, 
keep answer[i] == 0 instead.

 

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]
 
*/

/**
 *
 * @param {string[]} temperatures
 * @returns {string[]}
 */
const daysToMaxTemp = (temperatures) => {
    const outputArray = [];
    for (let i = 0; i < temperatures.length; i++) {
        let condition = false;
        let index = 1;
        while (!condition && index != temperatures.length) {
            if (temperatures[i] < temperatures[index + i]) {
                condition = true;
                outputArray.push(index);
            } else {
                index++;
            }
        }
        if (!condition) outputArray.push(0);
    }
    return outputArray;
};

console.log(daysToMaxTemp([73, 74, 75, 71, 69, 72, 76, 73]));
