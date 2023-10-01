/*

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
    const wordObj = [];
    for (let i = 0; i < strs.length; i++) {
        let check = false;
        for (let j = 0; j < wordObj.length; j++) {
            const word =
                wordObj[j][0] != undefined
                    ? wordObj[j][0].toString()
                    : wordObj[j].toString();
            console.log(word);
            if (singleCompare(word, strs[i])) {
                wordObj[j].push(strs[i]);
                check = true;
                break;
            } else {
                console.log('did not match');
            }
        }
        if (check == false) {
            wordObj.push([strs[i]]);
        }
    }
    return wordObj;
};

const singleCompare = (s, t) => {
    console.log(s, t);
    if (s.length != t.length) {
        return false;
    }
    const objA = {};
    const objB = {};
    for (let i = 0; i < s.length; i++) {
        objA[s[i]] ? (objA[s[i]] = 1 + objA[s[i]]) : (objA[s[i]] = 1);
        objB[t[i]] ? (objB[t[i]] = 1 + objB[t[i]]) : (objB[t[i]] = 1);
    }
    for (const [key, value] of Object.entries(objA)) {
        if (objB[key] != value) {
            return false;
        }
    }
    return true;
};

const idealSolution = (strs) => {
    response = {};
    for (const word of strs) {
        let count = Array(26).fill(0);
        for (const letter of word) {
            count[letter.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }
        const hash = count.toString();
        response[hash] != undefined
            ? (response[hash] = [...response[hash], word])
            : (response[hash] = [word]);
    }
    return Object.values(response);
};

console.log(idealSolution(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
