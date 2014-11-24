# light-array [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

Fast, low-garbage functions for operating on arrays.

> These are hypothetically faster, not actually benchmarked yet!


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

These methods directly modify the array you pass in and return `undefined`. No new arrays are constructed during this process, so no new garbage is created.


### `filterInPlace(array, callback)`

- Like the native `.filter()`, but it filters the array in place and does not create a new one.
- The order original of the items is maintained.

### `deleteItemAtIndex(array, index)`

- Deletes the item at the specified `index`.
- Uses a fast method that does **not** preserve the array's original order, but it does delete the item properly (i.e. the array length will be shortened by 1). If you care about keeping the array in order, use `.splice()`.

### `dedupe(array)`

- Removes any repeated items (using `===` for comparison) from the array.
- Original order is maintained, just with duplicates removed.
- If an element is duplicated, the **last** instance of it is kept, and all others deleted.


### `dedupeSorted(array)`

- Faster alternative to `dedupe()`, for use only when you know the array is already sorted.
- Sorted means that `array[n] < array[n + 1]` is always true. If this isn't true, the results will be unpredictable.
- Original order is maintained, just with duplicates removed.
- This assumes that the items are all the same type (number or string).


### To do

- more tests
- write benchmarks, test speed and [usage](https://github.com/arunoda/node-usage)


## License

© 2014 Callum Locke
Licensed under the MIT license.


[npm-url]: https://npmjs.org/package/light-array
[npm-image]: https://img.shields.io/npm/v/light-array.svg?style=flat-square

[travis-url]: http://travis-ci.org/callumlocke/light-array
[travis-image]: https://img.shields.io/travis/callumlocke/light-array.svg?style=flat-square

[depstat-url]: https://david-dm.org/callumlocke/light-array
[depstat-image]: https://img.shields.io/david/callumlocke/light-array.svg?style=flat-square
