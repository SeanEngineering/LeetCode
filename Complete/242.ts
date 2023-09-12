/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

const isAnagram = (s: string, t: string) => {
    if(s.length != t.length){
        return false;
    }
    if (s.split('').sort().join('') == t.split('').sort().join('')){
        return true;
    }
    return false;
    
}

const optimalSolution = (s: string, t: string) => {
    if (s.length != t.length) {
        return false;
    }
    const objA = {};
    const objB = {};
    for (let i = 0; i < s.length; i++) {
        objA[s[i]] ? (objA[s[i]] = 1 + objA[s[i]]) : (objA[s[i]] = 1);
        objB[t[i]] ? (objB[t[i]] = 1 + objB[t[i]]) : (objB[t[i]] = 1);
    }
    console.log(objA);
    console.log(objB);
    for (const [key, value] of Object.entries(objA)) {
        if (objB[key] != value) {
            console.log(objB[key], value, key);
            return false;
        }
    }
    return true;
}