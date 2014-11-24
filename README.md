# light-array [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

Fast, low-garbage functions for operating on arrays.


## Basic usage

```sh
$ npm install light-array
```

```js
var lightArray = require('light-array');

var animals = ['dog', 'banana', 'salamander',
  'mouse', 'giraffe', 'orange'];

lightArray.filterInPlace(animals, function (item) {
  return item !== 'banana' && item !== 'orange';
});

console.log(animals); // ['dog', 'salamander', 'mouse', 'giraffe']
```


## Methods

These methods directly modify the array you pass in. No new arrays are created. The methods all return `undefined`.


### `filterInPlace(array, callback)`

- Like the native `.filter()`, but it filters the array in place without creating a new one.
- The order original of the items is maintained.

### `removeItemByIndex(array, index)`

- Deletes the item at the specified `index`.
- Uses a fast approach that does **not** preserve the array's original order. If you care about keeping the array in order, use `.splice()`.

### `dedupe(array)`

- Removes any repeated items (using `===` for comparison) from the array.
- Original order is maintained, just with duplicates removed.
- If an element is duplicated, the **last** instance of it is kept, and all others deleted.


### `dedupeSorted(array)`

- Faster alternative to `lightArray.dedupe()`, for use only when you know the array is already sorted.
- Sorted means that `array[n] <= array[n + 1]` is always true. If this isn't the case, the results will be unpredictable.
- Original order is maintained (just with duplicates removed).


### To do

- more tests
- write benchmarks, test speed and [usage](https://github.com/arunoda/node-usage) against native equivalents and lodash.


## License

© 2014 Callum Locke
Licensed under the MIT license.


[npm-url]: https://npmjs.org/package/light-array
[npm-image]: https://img.shields.io/npm/v/light-array.svg?style=flat-square

[travis-url]: http://travis-ci.org/callumlocke/light-array
[travis-image]: https://img.shields.io/travis/callumlocke/light-array.svg?style=flat-square

[depstat-url]: https://david-dm.org/callumlocke/light-array
[depstat-image]: https://img.shields.io/david/callumlocke/light-array.svg?style=flat-square
