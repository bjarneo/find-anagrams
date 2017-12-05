const { deepStrictEqual } = require('assert');
const test = require('ava');

const findAnagrams = require('.');

const anagrams = [
    'listen',
    'silent',
    'enlist',
    'word',
    'dog',
    'god',
    'server',
    'revers'
];

const result = [ 
    [ 'listen', 'silent', 'enlist' ], 
    [ 'dog', 'god' ],
    [ 'server', 'revers' ]
];

const specificWord = [
    'silent',
    'listen',
    'enlist'
];

test(t => t.true(findAnagrams(anagrams).toString() === result.toString()));

test(t => t.true(findAnagrams(anagrams, 'silent').toString() === specificWord.toString()));
