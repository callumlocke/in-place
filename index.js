/**
 * in-place
 * https://github.com/callumlocke/in-place
 *
 * Copyright (c) 2014 Callum Locke
 * Licensed under the MIT license.
 */

'use strict';

var slice = Array.prototype.slice;

module.exports = {

  map: function (array, callback, thisArg) {
    if (thisArg) callback = callback.bind(thisArg);

    for (var i = 0, length = array.length; i < length; i++) {
      array[i] = callback(array[i], i);
    }

    return array;
  },

  filter: function (array, callback, thisArg) {
    var length = array.length, i, k, item;

    if (thisArg) callback = callback.bind(thisArg);

    // iterate through, moving callback-passing items to the front
    for (i = 0, k = 0; i < length; i++) {
      item = array[k] = array[i];

      if (callback(item, i, array)) k += 1; // this one can stay
    }

    // truncate the array after the last item that passes the check
    array.length = k;

    return array;
  },

  concat: function (array) {
    var values = slice.call(arguments, 1),
        nextIndex = array.length,
        value, i, l, i2, l2;

    for (i = 0, l = values.length; i < l; i++) {
      value = values[i];

      if (Array.isArray(value)) {
        for (i2 = 0, l2 = value.length; i2 < l2; i2++) {
          array[nextIndex] = value[i2];
          nextIndex++;
        }
      }
      else {
        array[nextIndex] = value;
        nextIndex++;
      }
    }

    return array;
  },

  deleteIndex: function (array, i) {
    // copy the last item and use it to replace the target index
    var lastIndex = array.length - 1;
    array[i] = array[lastIndex];

    // remove the last item
    array.length = lastIndex;

    return array;
  },

  dedupe: function (array) {
    var length = array.length,
        i, k, item, j, existsAhead;

    for (i = 0, k = 0; i < length; i++) {
      item = array[k] = array[i];

      // look ahead
      existsAhead = false;
      for (j = i + 1; j < length; j++) {
        if (array[j] === item) {
          existsAhead = true;
          break;
        }
      }

      if (!existsAhead) k += 1; // this one can stay
    }

    array.length = k;

    return array;
  },

  dedupeSorted: function (array) {
    var length = array.length,
        i, k, item;

    for (i = 0, k = 0; i < length; i++) {
      item = array[k] = array[i];

      if (array[i + 1] !== item) k += 1; // this one can stay
    }

    array.length = k;

    return array;
  }

};
