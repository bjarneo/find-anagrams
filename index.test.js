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

test(t => t.true(findAnagrams(anagrams).toString() === result.toString()));
