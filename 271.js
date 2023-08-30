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
    let counter = '';
    let numberCounter = 0;
    let isCounter = true;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] != '#' && isCounter) {
            counter += sentence[i];
        } else if (sentence[i] == '#' && isCounter) {
            isCounter = false;
            numberCounter = Number(counter) + i;
        }
        if (isCounter == false) {
            let tokenWord = '';
            for (let j = i + 1; j < numberCounter + 1; j++) {
                tokenWord += sentence[j];
            }
            i += numberCounter;
            sentenceArray.push(tokenWord);
            isCounter = true;
        }
    }
    return sentenceArray;
};

console.log(decode(encode(['hello', 'world'])));
