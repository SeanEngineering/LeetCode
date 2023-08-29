/*

Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Please implement encode and decode
*/

/**
 * @param {string[]} sentence
 * @return {string}
 */
const encode = (sentence) => {
    return sentence.map((item) => `${item.length}#${item}`).join('');
};

/**
 * @param {string} sentence
 * @return {string[]}
 */
const decode = (sentence) => {
    const sentenceArray = [];
    for (let i = 0; i < sentence.length; i++) {
        sentence[i];
    }
};

console.log(encode(['this is my test string', 'hello']));
