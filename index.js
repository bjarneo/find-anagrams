const isAnagram = require('is-anagram');

/**
 * Returns a matrix array with all anagrams found in an array
 *
 * @param {array} words The array of words to check for anagrams
 * @return {array} result The matrix array of anagrams
 */
module.exports = function findAnagrams(words) {
    if (!Array.isArray(words)) {
        throw new TypeError('your input "' + typeof words + '" was not an array.')
    }

    const result = [];
    const skip = [];

    for (let i = 0; i < words.length; i++) {
        const anagrams = [words[i]];

        for (let j = 0; j < words.length; j++) {
            if (words[i] === words[j]) {
                continue;
            }

            if (skip.indexOf(words[i]) > -1) {
                continue;
            }

            if (!isAnagram(words[i], words[j])) {
                continue;
            }

            skip.push(words[j]);
            
            anagrams.push(words[j]);
        }

        if (anagrams.length === 1) {
            continue;
        } 

        result.push(anagrams);
    }

    return result;
};