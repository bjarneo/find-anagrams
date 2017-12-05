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
