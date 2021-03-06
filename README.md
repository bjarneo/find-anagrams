find anagrams
======
![Travis](https://travis-ci.org/bjarneo/find-anagrams.svg?branch=master)

What is this?
------
This package will find all anagrams from an array and group them together in an matrix array. It will discard words without an anagram. https://en.wikipedia.org/wiki/Anagram

Installation
------
It's available on npm.
```
npm install --save find-anagrams
```

Usage
------
Find all words that are anagrams in an array
```js
const findAnagrams = require('find-anagrams');

findAnagrams([
    'listen',
    'silent',
    'enlist',
    'word',
    'dog',
    'god',
    'server',
    'revers'
]);

/*
[ 
    [ 'listen', 'silent', 'enlist' ], 
    [ 'dog', 'god' ],
    [ 'server', 'revers' ]
]
*/
```

Find all words that are anagrams to provided word
```js
const findAnagrams = require('find-anagrams');

const words = [
    'listen',
    'silent',
    'enlist',
    'word',
    'dog',
    'god',
    'server',
    'revers'
];

findAnagrams(words, 'silent');

/*
The provided word will be the first in the array

[ 'silent', 'listen', 'enlist' ]
*/
```

Test
------
```bash
$ npm test
```

Contribution
------
Contributions are appreciated.

License
------
MIT licensed. See LICENSE.
