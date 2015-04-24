# in-place [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

Fast, low-garbage functions for modifying arrays.

```sh
$ npm install in-place
```

```js
var inPlace = require('in-place');
```


## Methods

All these methods directly modify the array you pass in. They never allocate new arrays.

### `map(array, callback[, thisArg])`

Alternative to [`Array.prototype.map()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

```js
var array = [1, 2, 3, 4, 5];

inPlace.map(array, function (item) { return item * 2 });

console.log(array); // [2, 4, 6, 8, 10]
```

### `filter(array, callback[, thisArg])`

Alternative to [`Array.prototype.filter()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

```js
var array = [1, 12.1, 5.2, 22, 6];

inPlace.filter(array, function (item) { return item < 10 });

console.log(array); // [1, 5.2, 6]
```

### `deleteIndex(array, index)`

- Very fast method to delete a single item by index.
- Does **not** preserve the original order.
- If you care about keeping the array in order, use [`Array.prototype.splice(index, 1)`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

```js
var foo = [1, 2, 3, 4, 5, 6, 7];

inPlace.deleteIndex(array, 2);

console.log(array); // [1, 2, 7, 4, 5, 6]
```

### `dedupe(array)`

- Removes any repeated items (using `===` for comparison) from the array.
- The **last** of each set of duplicate values is retained.

```js
var array = [1, 2, 2, 5, 1, 6, 2];

inPlace.dedupe(array);

console.log(array); // [5, 1, 6, 2];
```

### `dedupeSorted(array)`

- Faster alternative to `inPlace.dedupe()` for use when you know the array is **already** sorted (i.e. `array[n] <= array[n + 1]`).

```js
var array = [1, 2, 2, 3, 5, 6, 6, 6];

inPlace.dedupe(array);

console.log(array); // [1, 2, 3, 5, 6]
```


[npm-url]: https://npmjs.org/package/in-place
[npm-image]: https://img.shields.io/npm/v/in-place.svg?style=flat-square

[travis-url]: http://travis-ci.org/callumlocke/in-place
[travis-image]: https://img.shields.io/travis/callumlocke/in-place.svg?style=flat-square

[depstat-url]: https://david-dm.org/callumlocke/in-place
[depstat-image]: https://img.shields.io/david/callumlocke/in-place.svg?style=flat-square
