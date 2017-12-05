const isAnagram = require('is-anagram');

/**
 * Returns a matrix array with all anagrams found in an array
 *
 * @param {array} words The array of words to check for anagrams
 * @param {string} word The word (needle) to check against words provide for anagrams 
 * @return {array} result The matrix array of anagrams
 */
module.exports = function findAnagrams(words, word) {
    if (!Array.isArray(words)) {
        throw new TypeError('your input "' + typeof words + '" was not an array.')
    }

    const result = [];
    const skip = [];

    const copy = [...words];

    if (typeof word === 'string') {
        words = [word];
    }

    for (let i = 0; i < words.length; i++) {
        const anagrams = [words[i]];

        for (let j = 0; j < copy.length; j++) {
            if (words[i] === copy[j]) {
                continue;
            }

            if (skip.indexOf(words[i]) > -1) {
                continue;
            }

            if (!isAnagram(words[i], copy[j])) {
                continue;
            }

            skip.push(copy[j]);
            
            anagrams.push(copy[j]);
        }

        if (anagrams.length === 1) {
            continue;
        } 

        // We don't need a matrix array if we search for words that are anagrams
        // of one word
        if (word) {
            return anagrams;
        }

        result.push(anagrams);
    }

    return result;
};